import low from 'lowdb';
import { format } from 'date-fns';

const FileSync = require('lowdb/adapters/FileSync');

const NAME_FORMAT = 'MM_DD_YYYY';
const TIME_RECORD_FORMAT = 'MM/DD/YYYY HH:mm:ss';

export const getNameFormat = date => format(date || new Date(), NAME_FORMAT);

export const getDataBase = (customDate = null) => {
  const adapter = new FileSync(`./src/utils/bases/db_${getNameFormat(customDate)}.json`);
  const db = low(adapter);
  db.defaults({ environmentData: [], actions: [] }).write();
  return db;
};

export const makeTimeRecod = (dataToSave) => {
  const time = format(new Date(), TIME_RECORD_FORMAT);
  return {
    time,
    ...dataToSave,
  };
};
