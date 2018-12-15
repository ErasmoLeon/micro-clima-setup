import schedule from 'node-schedule';
import config from './config.json';
import fetchEnvironmentData from './fetchEnvironmentData';
import turnPinSeconds from './turnOnPin';
import { getDataBase, makeTimeRecod } from './dataBase.util';

const greaterThan = (envVar, limit) => envVar > limit;
const lessThan = (envVar, limit) => envVar < limit;

const rangeChecks = {
  greaterThan,
  lessThan,
};

const runChecks = (envrionmentData) => {
  config.rangeCommands.forEach(({
    action, environmentVar, value, type, durationSecs,
  }) => {
    const valueToCheck = envrionmentData[environmentVar];
    const passValidation = rangeChecks[type](valueToCheck, value);
    if (passValidation) {
      const pinActionNumber = config.pinActions[action];
      const message = `Runing ${action} for ${durationSecs} seconds on ${pinActionNumber} pin`;
      getDataBase().get('actions').push(makeTimeRecod({ message })).write();
      console.log(`Saving message: ${message}`);
      turnPinSeconds(pinActionNumber, durationSecs);
    }
  });
};

export const fetchEnvironmentDataAndRunActions = () => {
  fetchEnvironmentData()
    .then(runChecks)
    .catch(error => console.log(error));
};

export default () => {
  schedule.scheduleJob(
    config.cronForCheckRanges,
    fetchEnvironmentDataAndRunActions,
  );
};
