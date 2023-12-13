const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Availability = require('../models/availabilityModel')

//Gets all users --- GET api/users
const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

//Gets a single user --- GET /api/users/:id
const getSingleUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
        // If user is not found, return a 404 response
        res.status(404).json({ message: 'User not found' });
        return;
    }

    res.status(200).json(user);
})

//Creates a user --- POST /api/users
const createUser = asyncHandler(async (req, res) => {
    if (!req.is('application/json')) {
        // 415 = Unsupported Media Type
        res.status(415);
        throw new Error('Unsupported Media Type. Please send JSON.');
    }

    const { Username, Password } = req.body;
    if (!Username || typeof Username !== 'string' || Username.trim() === '') {
        res.status(400);
        throw new Error('Invalid or missing Username.');
    }

    if (!Password || typeof Password !== 'string' || Password.trim() === '') {
        res.status(400);
        throw new Error('Invalid or missing Password.');
    }

    const user = await User.create({
        Username,
        Password
    });

    res.status(200).json(user);
});

//Edits a user --- PUT /api/users/:id
const editUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json(updatedUser);
})

//Deletes a user --- DELETE /api/user/:id
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    const result = await User.deleteOne({ _id: userId });
    if (result.deletedCount === 1) {
        res.status(200).json({ id: userId });
    } else {
        res.status(500).json({ message: 'Failed to delete user' });
    }
})

//START OF AVAILABILITY ENDPOINTS
//Gets all users availability in order to make meetings --- GET api/timeslots
const getTimeslots = asyncHandler(async (req, res) => {
    const availabilities = await Availability.findById();
    res.status(200).json(availabilities);
})

//Gets a single user's availability --- GET /api/users/:id/availability
const getSingleUserAvailability = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    
    try {
        const foundAvailability = await Availability.findOne({ availabilityUserID: userId})

        if (!foundAvailability) {
            // If user is not found, return a 404 response
            res.status(404).json({ message: `Availability for User ID:${userId} not found` });
        }

        res.status(200).json(foundAvailability);

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})

//Creates a new availability for user --- POST /api/users/:id/availability/
const createUserAvailability = asyncHandler(async (req, res) => {
    if (!req.is('application/json')) {
        // 415 = Unsupported Media Type
        res.status(415);
        throw new Error('Unsupported Media Type. Please send JSON.');
    }

    const availabilityUserID = req.params.id
    const availabilityDate = new Date(req.body.availabilityDate);
    const { startTime, endTime} = req.body;
    if (isNaN(availabilityDate)) { // Check if parsed date is a valid Date string
        res.status(400);
        throw new Error('Please provide a valid availability date in the format of YYYY-MM-DDTHH:MM:SS.');
    }
    if(!startTime) {
        res.status(400);
        throw new Error('Please provide a start time in the format HH:MM PM/AM.')
    }
    if(!endTime) {
        res.status(400);
        throw new Error('Please provide an end time in the format HH:MM PM/AM.')
    }

    const availability = await Availability.create({
        availabilityUserID,
        availabilityDate,
        startTime,
        endTime
    });

    res.status(200).json(availability);
})

//Edits a user's availability --- PUT /api/users/:id/availability/:id
const editUserAvailability = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const availabilityId = req.params.availability_id;

    const availability = await Availability.findById(availabilityId);
    if (!availability) {
        res.status(404).json({ message: `Availability id:${availabilityId} not found` });
        return;
    }
    const updatedAvailability = await Availability.findByIdAndUpdate(availabilityId, req.body, { new: true });
    res.status(200).json(updatedAvailability);
})

//Deletes a user's availability --- DELETE /api/user/:id/availability/:id
const deleteUserAvailability = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const availabilityId = req.params.availability_id
    const availability = await Availability.findById(availabilityId);

    if (!availability) {
        res.status(404).json({ message: `Availability id:${availabilityId} not found` });
        return;
    }

    const result = await Availability.deleteOne({ _id: availabilityId });
    if (result.deletedCount === 1) {
        res.status(200).json({ id: availabilityId });
    } else {
        res.status(500).json({ message: `Failed to delete availability id:${availabilityId}` });
    }
})

module.exports = {
    getAllUser, getSingleUser, createUser, editUser, deleteUser,
    getTimeslots,
    getSingleUserAvailability, createUserAvailability, editUserAvailability, deleteUserAvailability
}