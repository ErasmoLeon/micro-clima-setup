import express from 'express';
import { getDataBase } from '../../utils/dataBase.util';

const getLastRecords = numberOfRecords => getDataBase()
  .get('environmentData')
  .orderBy('time', 'desc')
  .take(numberOfRecords);

const router = express.Router();

router.get('/getRecords/:numberOfRecords', (req, res) => {
  const records = getLastRecords(parseInt(req.params.numberOfRecords, 10));
  res.json({ records });
});

router.get('/average/today', (req, res) => {
  const lastRecords = getLastRecords(100);
  const temperature = lastRecords.meanBy('temperature');
  const humidity = lastRecords.meanBy('humidity');
  res.json({ temperature, humidity });
});

export default router;
