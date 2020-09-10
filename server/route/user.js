const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/user')
const getUser = controller.list_users

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'this is for get user!'
//     })
// })
router.get('/', getUser)

router.post('/create-user', (req, res, next) => {
    res.status(200).json({
        message: 'Message receive from post on /res/create-user!'
    })
})

module.exports = router