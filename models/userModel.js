const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'please enter a username']
        },
        idnumber:{
            type: Number,
            required: true,
            default: 0

        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User',userSchema);

module.exports = User;