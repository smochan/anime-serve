import express, { Express, Request, Response, NextFunction } from 'express';
import router from './routes';
import cors from 'cors';
const app: Express = express();


const start = async () => {

  const PORT = process.env.PORT || 8080;

  app.use(cors({ origin: '*' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/', router);

  app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  });

  app.listen(PORT, function () {
    console.log('server started on port ' + PORT);
  });
}

start();