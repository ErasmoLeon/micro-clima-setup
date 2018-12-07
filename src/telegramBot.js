import TelegramBot from 'node-telegram-bot-api';
import { messageCommands } from './commands';
import config from './config.json';

const bot = new TelegramBot(config.telegramToken, { polling: true });

const isBotCommand = message =>
  message.entities && message.entities[0].type === 'bot_command';

const messageCallback = (message) => {
  const chatId = message.chat.id;
  if (message.from.id != config.user) {
    return bot.sendMessage(chatId, 'No eres un usuario valido');
  }
  if (!isBotCommand(message)) {
    return bot.sendMessage(chatId, 'Escribe un comando valido');
  }
  if (messageCommands[message.text]) {
    messageCommands[message.text]()
      .then(() => {
        bot.sendMessage(chatId, commandMessage);
      })
      .catch((errorMessageCommand) => {
        console.warn({ errorMessageCommand });
      });
  }
  return bot.sendMessage(chatId, 'Comando no reconocido');
}

export default () => {
  bot.on('message', messageCallback);
};
