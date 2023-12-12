//Simplifies error handling
const asyncHandler = require('express-async-handler')

//Gets all meetings --- GET api/users
const getAllMeetings = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get all Meetings'})
})

//Gets a single meeting --- GET /api/users/:id
const getSingleMeeting = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get a Meeting ${req.params.meeting_id}` })
})

//Creates a meeting--- POST /api/users
const createMeeting = asyncHandler(async (req, res) => {
    if(!req.body.text){ // 400 = bad request
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create a Meeting' })
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