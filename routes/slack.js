//require('dotenv').config();
var express = require('express');
var router = express.Router();
var slackApi = require('slack');

const botToken = process.env.GS_SLACK_TOKEN
const directMessageId = process.env.GS_SLACK_DIRECT_MESSAGE_ID
const bot = new slackApi({botToken});

/* Notify to self */
router.get('/notify-self',async function(req, res, next) {
    if(!req.query.text) {
        const err = new Error('Required query params missing : text');
        err.status = 400;
        next(err);
    }
    
    var response = await bot.chat.postMessage({
        token: botToken,
        channel: directMessageId,
        text: req.query.text
    });
    console.log("=> Sent notification ", response);
    res.json(response);
});

module.exports = router;
