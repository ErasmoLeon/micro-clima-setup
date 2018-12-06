import schedule from 'node-schedule';
import config from 'config.json';
import saveEnvironmentData from './saveEnvironmentData';

export default () => {
  schedule.scheduleJob(config.cronConfigForSavingData, () => {
    saveEnvironmentData({ a: 1, b: 2 });
  });
};