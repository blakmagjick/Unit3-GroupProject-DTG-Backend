const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.users.index)
router.post('/login', ctrls.users.login)
router.post('/signup', ctrls.users.signup)
router.delete('/logout/:id', ctrls.users.logout)

module.exports = router