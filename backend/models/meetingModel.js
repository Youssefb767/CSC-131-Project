const mongoose = require('mongoose')

const meetingSchema = mongoose.Schema({
    startDate: {
        type: Date,
        required: [true, 'Please add a start date for the meeting']
    },
    startTime: {
        type: String,
        required: [true, 'Please add a start time for the meeting in form HH:MM PM/AM']
    },
    endTime: {
        type: String,
        required: [true, 'Please add an end time for the meeting in the form HH:MM PM/AM']
    },
    meetingDescription: {
        type: String,
        required: [true, 'Please add a description of the meeting']
    },
    availableUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true,
})

module.exports = mongoose.model('Meeting', meetingSchema)