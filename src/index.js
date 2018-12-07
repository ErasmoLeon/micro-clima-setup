import startTelegramBot from './telegramBot';
import scheduleEnvironment from './scheduleEnvironment';

import fetchEnvironmentData from './fetchEnvironmentData';

const monitoringEnvironmentData = data => console.log(data);

fetchEnvironmentData(monitoringEnvironmentData)();

// startTelegramBot();
// scheduleEnvironment();