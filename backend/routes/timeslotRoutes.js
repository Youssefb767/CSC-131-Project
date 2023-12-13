const express = require('express')
const router = express.Router()

const {getTimeslots,}
    = require('../controllers/timeslotController')

router.route('/').get(getTimeslots) //timeslots function if we choose to do it this way

module.exports = router