const user = require('./user')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        impression: 'Welcome to the RES!',
        message: 'Message receive from post on /res/'
    })
})
router.use('/user', require('./user'))
router.use('/auth', require('./auth'))

module.exports = router