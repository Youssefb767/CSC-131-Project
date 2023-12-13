const mongoose = require('mongoose')

const availabilitySchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a start and end time']
    }
})

module.exports = mongoose.model('Availability', availabilitySchema)