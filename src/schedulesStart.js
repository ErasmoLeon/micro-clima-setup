import scheduleEnvironment from './schedules/scheduleEnvironment';
import scheduleRangeActions from './schedules/scheduleRangeActions';

console.log('Starting schedule to save data.');
scheduleEnvironment();

console.log('Starting schedule for range actions.');
scheduleRangeActions();
