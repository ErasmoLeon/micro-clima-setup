import express from 'express';
import bodyParser from 'body-parser';

import environmentRouter from './routers/environment.router';
import actionsRouter from './routers/actions.router';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3002;

app.use('/action', actionsRouter);
app.use('/environment', environmentRouter);

app.listen(port);

console.log(`Api starting on port ${port}`);
