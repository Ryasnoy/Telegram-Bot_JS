const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '460496377:AAEfoxLCOmoMGVXgsrvXnWp7C_qcRtQb2Nw'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello from Heroku, bot says: "Hi, ${msg.from.first_name}"`)
})
