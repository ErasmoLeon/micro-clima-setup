import startTelegramBot from './telegramBot';
import scheduleEnvironment from './scheduleEnvironment';
import scheduleRangeActions from './scheduleRangeActions';

console.log('Starting bot.');
startTelegramBot();

console.log('Starting schedule to save data.');
scheduleEnvironment();

console.log('Starting schedule for range actions.');
scheduleRangeActions();
