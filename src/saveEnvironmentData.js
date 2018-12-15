import { getDataBase, makeTimeRecod } from './dataBase.util';

export const saveDayEnvironmentData = (environmentData) => {
  const dataToSave = makeTimeRecod(environmentData);
  console.log('Saving data', dataToSave);
  getDataBase().get('environmentData').push(dataToSave).write();
};

export default saveDayEnvironmentData;
