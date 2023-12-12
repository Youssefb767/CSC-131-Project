const mongoose = require('mongoose')

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.
        underline);
    } catch (error) {
        //Logs an error if it happens and exits the process with an error code
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
