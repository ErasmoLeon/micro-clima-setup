import { format } from 'date-fns';
import low from 'lowdb';

const FileSync = require('lowdb/adapters/FileSync');

const currentDate = new Date();
const dateCurrent = format(currentDate, 'MM/DD/YYYY HH:MM:SS');
const dateName = format(currentDate, 'MM_DD_YYYY');

const adapter = new FileSync(`db_${dateName}.json`)
const db = low(adapter)

db.defaults({ environmentData: [] }).write();

export const saveDayEnvironmentData = (environmentData) => {
  const dataToSave = {
    time: dateCurrent,
    ...environmentData,
  };
  console.log(dataToSave);
  db.get('environmentData').push(dataToSave).write();
};
