const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    Username: {
        type: String,
         required: [true, 'Input a username']
    },
    Password:{
        type: String,
        required: [true, 'Input a password']
    }
}, {
    timestamps: [true],
    })

module.exports = mongoose.model('User', userSchema)