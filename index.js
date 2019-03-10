const TelegramBot = require('node-telegram-bot-api');
const token = '728281689:AAHRrCd2ISJty0Q532jGGTNQNJEOoc9JO0Y';
const bot = new TelegramBot(token, {polling: true})
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Ill have the tuna. No crust.');
});
