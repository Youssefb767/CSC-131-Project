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
       getTimeslots,
       getSingleUserAvailability,
       createUserAvailability,
       editUserAvailability,
       deleteUserAvailability}
       = require('../controllers/userController')
   
   // You can combine routes that share an endpoint like this:
   router.route('/').get(getAllUser).post(createUser)
   
   router.route('/:id').get(getSingleUser).put(editUser).delete(deleteUser)
   
   router.route('/:id/availability').get(getSingleUserAvailability).post(createUserAvailability)
   
   router.route('/:id/availability/:availability_id').put(editUserAvailability).delete(deleteUserAvailability)
   
   //Lets you use the routes in the server file
   module.exports = router