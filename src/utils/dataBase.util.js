import low from 'lowdb';
import { format } from 'date-fns';

const FileSync = require('lowdb/adapters/FileSync');

export const getDataBase = () => {
  const dateName = format(new Date(), 'MM_DD_YYYY');
  const adapter = new FileSync(`db_${dateName}.json`);
  const db = low(adapter);
  db.defaults({ environmentData: [], actions: [] }).write();
  return db;
};

export const makeTimeRecod = (dataToSave) => {
  const time = format(new Date(), 'MM/DD/YYYY HH:mm:ss');
  return {
    time,
    ...dataToSave,
  };
};
