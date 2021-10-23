const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/login', ctrls.user.login)
router.post('/signup', ctrls.user.signup)
router.delete('/logout/:id', ctrls.user.logout)

module.exports = router