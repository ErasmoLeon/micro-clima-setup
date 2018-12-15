import startTelegramBot from './telegramBot/telegramBot';
import scheduleEnvironment from './schedules/scheduleEnvironment';
import scheduleRangeActions from './schedules/scheduleRangeActions';

console.log('Starting bot.');
startTelegramBot();

console.log('Starting schedule to save data.');
scheduleEnvironment();

console.log('Starting schedule for range actions.');
scheduleRangeActions();
