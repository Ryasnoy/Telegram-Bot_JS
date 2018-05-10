const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '460496377:AAEfoxLCOmoMGVXgsrvXnWp7C_qcRtQb2Nw'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('new_chat_members', message => {
  bot.sendMessage(message.chat.id, `Привет, ${message.new_chat_member.username}! Расскажи немного о себе, что бы мы с тобой познакомились поближе`)
})
