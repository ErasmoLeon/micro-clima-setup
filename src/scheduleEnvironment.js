import schedule from 'node-schedule';
import config from './config.json';
import { saveDayEnvironmentData } from './saveEnvironmentData';
import fetchEnvironmentData from './fetchEnvironmentData';

export default () => {
  schedule.scheduleJob(config.cronConfigForSavingData, () => {
    fetchEnvironmentData()
      .then((data) => {
        saveDayEnvironmentData(data);
      })
      .catch(error => console.log(error));
  });
};
