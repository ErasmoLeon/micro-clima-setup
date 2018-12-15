import express from 'express';
import { getDataBase } from '../../utils/dataBase.util';

const getLastRecords = numberOfRecords => getDataBase()
  .get('actions')
  .orderBy('time', 'desc')
  .take(numberOfRecords);

const router = express.Router();

router.get('/getRecords/:numberOfRecords', (req, res) => {
  const records = getLastRecords(parseInt(req.params.numberOfRecords, 10));
  res.json({ records });
});

export default router;
