//Simplifies error handling
const asyncHandler = require('express-async-handler')
const Meeting = require('../models/meetingModel')
const User = require("../models/userModel");

//Gets all meetings --- GET api/meeting
const getAllMeetings = asyncHandler(async (req, res) => {
    const meetings = await Meeting.find()
    res.status(200).json({ message: 'Get all Meetings'})
})

//Gets a single meeting --- GET /api/meeting/{meeting_id}
const getSingleMeeting = asyncHandler(async (req, res) => {
    const meetingId = req.params.id;
    const meeting = await Meeting.findById(meetingId);

    if (!meeting) {
        // If meeting is not found, return a 404 response
        res.status(404).json({ message: 'Meeting not found' });
        return;
    }

    res.status(200).json(meeting);
})

//Creates a meeting--- POST /api/meeting
const createMeeting = asyncHandler(async (req, res) => {
    console.log("help me")
})

//Edits a user --- PUT /api/users/:id
const editMeeting = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Edit a Meeting ${req.params.meeting_id}` })
})

//Deletes a user --- DELETE /api/user/:id
const deleteMeeting = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete a Meeting ${req.params.meeting_id}` })
})

module.exports = {
    getAllMeetings, getSingleMeeting, createMeeting, editMeeting, deleteMeeting
}