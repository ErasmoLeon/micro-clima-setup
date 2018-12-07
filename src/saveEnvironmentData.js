import db from 'quick.db'
import { format } from 'date-fns';

const currentDate = new Date();

const dateCurrent = format(currentDate, 'MM/DD/YYYY HH:MM:SS')

export const saveDayEnvironmentData = (environmentData) => {
  const dataToSave = {
    time: dateCurrent,
    ...environmentData,
  };
  console.log(dataToSave);
  db.push('environment.items', dataToSave);
};
