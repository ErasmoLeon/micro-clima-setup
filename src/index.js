import TelegramBot from 'node-telegram-bot-api';

const token = '765371044:AAFEKO41gu7BPi3GdVMeswbsqjAQvzS0ExA';
const bot = new TelegramBot(token, { polling: true });

const myId = 677959493;

const isBotCommand = message =>
  message.entities && message.entities[0].type === 'bot_command';

bot.on('message', (message) => {
  const chatId = message.chat.id;
  if (message.from.id != myId) {
    return bot.sendMessage(chatId, 'No eres un usuario valido!!');
  }
  if (!isBotCommand(message)) {
    return bot.sendMessage(chatId, 'Escribe un comando valido');
  }
  bot.sendMessage(chatId, 'Received your message');
});