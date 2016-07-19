require('dotenv').config();
var Botkit = require('botkit');
var ledStatusControl = require('./led_status_control.js');

console.log("using token:", process.env.SLACK_BOT_API_TOKEN);

var controller = Botkit.slackbot({
	debug: false
})

controller.spawn({
	token: process.env.SLACK_BOT_API_TOKEN
}).startRTM()

controller.hears("dnd", ["direct_message"], function (bot, message) {
	ledStatusControl.setDnd()
	bot.reply(message, "Set `/dnd`.")
})
controller.hears("afk", ["direct_message"], function (bot, message) {
	ledStatusControl.setAfk()
	bot.reply(message, "Set `/afk`.")
})
controller.hears("sup", ["direct_message"], function (bot, message) {
	ledStatusControl.setSup()
	bot.reply(message, "Set `/sup`.")
})
