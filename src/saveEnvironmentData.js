import diskdb from 'diskdb'
import { format } from 'date-fns';

const currentDate = new Date();

const dateCollection = format(currentDate, 'MM_DD_YYYY')
const dateCurrent = format(currentDate, 'MM/DD/YYYY HH:MM:SS')

export const saveDayEnvironmentData = (environmentData) => {
  db.connect('db', [`environment_${dateCollection}`]);
  db.environment.save({
    time: dateCurrent,
    ...environmentData,
  });
};
