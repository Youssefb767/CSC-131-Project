const mongoose = require('mongoose')

const availabilitySchema = mongoose.Schema({
    availabilityUserID: {
        type: String,
        required: [true, 'Please give the users ID']
    },
    availablityDate: {
        type: Date,
        required: [true, 'Please give a starting date']
    },
    startTime: {
        type: String,
        required: [true, 'Please give a start time for your avialablity in the format HH:MM PM/AM']
    },
    endTime: {
        type: String,
        required: [true, 'Please give an end time for your availability in the format HH:MM PM/AM']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Availability', availabilitySchema)