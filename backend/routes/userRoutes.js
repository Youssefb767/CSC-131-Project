/* Creating routes and controllers let you split up large api file into much smaller,
   more manageable files so that your "server" file isn't a huge wall of text */

const express = require('express')
const router = express.Router()

//Lets you import the functionalities from the controller file
const {getAllUser,
    getSingleUser,
    createUser,
    editUser,
    deleteUser,
    getAllUserAvailability,
    getSingleUserAvailability,
    createUserAvailability,
    editUserAvailability,
    deleteUserAvailability}
    = require('../controllers/userController')

// You can combine routes that share an endpoint like this:
router.route('/users').get(getAllUser).post(createUser)

router.route('/users/:id').get(getSingleUser).put(editUser).delete(deleteUser)

//router.route('/timeslots').get(getAllUserAvailability) timeslots function if we choose to do it this way

router.route('/users/:id/availability').get(getSingleUserAvailability).post(createUserAvailability)

router.route('/users/:id/availability/:availability_id').put(editUserAvailability).delete(deleteUserAvailability)

//Lets you use the routes in the server file
module.exports = router