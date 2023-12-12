const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    id: {
       type: Number,
        required: [true],
        unique: [true]
    },
    Username: {
        type: String,
         required: [true]
    },
},{
    timestamps: [true],
    })

module.exports = mongoose.model('User', userSchema)