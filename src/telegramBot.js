import TelegramBot from 'node-telegram-bot-api';

import config from 'config.json';

const bot = new TelegramBot(config.telegramToken, { polling: true });

const isBotCommand = message =>
  message.entities && message.entities[0].type === 'bot_command';

export default () => {
  bot.on('message', (message) => {
    const chatId = message.chat.id;
    if (message.from.id != config.user) {
      return bot.sendMessage(chatId, 'No eres un usuario valido!!');
    }
    if (!isBotCommand(message)) {
      return bot.sendMessage(chatId, 'Escribe un comando valido');
    }
    bot.sendMessage(chatId, 'Received your message');
  });
};