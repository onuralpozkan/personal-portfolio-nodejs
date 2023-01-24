const router = require('express').Router();
const messageController = require('../controllers/message.controller');

router.post('/send-message', messageController.sendMessage)

module.exports = router;