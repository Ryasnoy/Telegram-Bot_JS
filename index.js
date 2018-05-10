const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '460496377:AAEfoxLCOmoMGVXgsrvXnWp7C_qcRtQb2Nw'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('new_chat_members', msg => {
  bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Расскажи немного о себе, что бы мы с тобой познакомились поближе`)
})
