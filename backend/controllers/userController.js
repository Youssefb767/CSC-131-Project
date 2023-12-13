const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

//Gets all users --- GET api/users
const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

//Gets a single user --- GET /api/users/:id
const getSingleUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get a user ${req.params.id}` })
})

//Creates a user --- POST /api/users
const createUser = asyncHandler(async (req, res) => {
    if (!req.is('application/json')) {
        // 415 = Unsupported Media Type
        res.status(415);
        throw new Error('Unsupported Media Type. Please send JSON.');
    }

    const { Username, Password } = req.body;
    if (!Username || !Password) {
        // 400 = Bad Request
        res.status(400);
        throw new Error('Please provide both Username and Password fields.');
    }

    const user = await User.create({
        Username,
        Password
    });

    res.status(200).json(user);
})

//Edits a user --- PUT /api/users/:id
const editUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Edit a user ${req.params.id}` })
})

//Deletes a user --- DELETE /api/user/:id
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete a user ${req.params.id}` })
})

//START OF AVAILABILITY ENDPOINTS
//Gets all users availability and compare it to the times --- GET api/users/timeslots
const getAllUserAvailability = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get all availability'})
})

//Gets a single user's availability --- GET /api/users/:id/availability
const getSingleUserAvailability = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get user ${req.params.id}'s availability` })
})

//Creates a new availability for user --- POST /api/users/:id/availability/
const createUserAvailability = asyncHandler(async (req, res) => {
    if(!req.body.text){ // 400 = bad request
        res.status(400)
        throw new Error('Please add a start and end time')
        //TODO make new error for non existent user
    }
    res.status(200).json({message: `New availability created for user ${req.params.id}` })
})

//Edits a user's availability --- PUT /api/users/:id/availability/:id
const editUserAvailability = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Edit user ${req.params.id}'s availability number ${req.params.availability_id}`})
})

//Deletes a user's availability --- DELETE /api/user/:id/availability/:id
const deleteUserAvailability = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete user ${req.params.id}'s availability number ${req.params.availability_id}`})
})

module.exports = {
    getAllUser, getSingleUser, createUser, editUser, deleteUser,
    getSingleUserAvailability, createUserAvailability, editUserAvailability, deleteUserAvailability
}