/* Creating routes and controllers let you split up large api file into much smaller,
   more manageable files so that your "server" file isn't a huge wall of text */

   const express = require('express')
   const router = express.Router()

   //Lets you import the functionalities from the controller file
   const {getAllMeetings,
       getSingleMeeting,
       createMeeting,
       editMeeting,
       deleteMeeting}
       = require('../controllers/meetingController')

   // You can combine routes that share an endpoint like this:
   router.route('/').get(getAllMeetings).post(createMeeting)
   
   router.route('/:meeting_id').get(getSingleMeeting).put(editMeeting).delete(deleteMeeting)
   
   //Lets you use the routes in the server file
   module.exports = router