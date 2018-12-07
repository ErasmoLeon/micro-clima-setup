import startTelegramBot from './telegramBot';
import scheduleEnvironment from './scheduleEnvironment';

console.log('starting bot!...');

startTelegramBot();

console.log('starting schedule to save data!...');

scheduleEnvironment();
