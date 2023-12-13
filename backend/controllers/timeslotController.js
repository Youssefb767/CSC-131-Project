const asyncHandler = require('express-async-handler')
const Availability = require('../models/availabilityModel')

//Gets all users availability in order to make meetings --- GET api/timeslots
const getTimeslots = asyncHandler(async (req, res) => {
    const availabilities = await Availability.find();
    res.status(200).json(availabilities);
})

module.exports = {
    getTimeslots
}