import TelegramBot from 'node-telegram-bot-api';

const token = '765371044:AAFEKO41gu7BPi3GdVMeswbsqjAQvzS0ExA';
const bot = new TelegramBot(token, { polling: true });

const whiteList = [677959493];

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});