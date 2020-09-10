const express = require('express');
const router = express.Router();

router.get('/sign-in', (req, res, next) => {
    res.status(200).json({
        message: 'Message receive from post on /res/do-login'
    })
})

router.get('/sign-up', (req, res, next) => {
    res.status(200).json({
        message: 'Message receive from post on /res/do-register!'
    })
})

module.exports = router