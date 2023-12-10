//Simplifies error handling
const asyncHandler = require('express-async-handler')

//Gets all users --- GET api/users
const getAllUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get all users'})
})

//Gets a single user --- GET /api/users/:id
const getSingleUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get a user ${req.params.id}` })
})

//Creates a user --- POST /api/users
const createUser = asyncHandler(async (req, res) => {
    if(!req.body.text){ // 400 = bad request
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Create a user' })
})

//Edits a user --- PUT /api/users/:id
const editUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Edit a user ${req.params.id}` })
})

//Deletes a user --- DELETE /api/user/:id
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete a user ${req.params.id}` })
})

module.exports = {
    getAllUser, getSingleUser, createUser, editUser, deleteUser
}