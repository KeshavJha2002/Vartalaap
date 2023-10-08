import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/AuthRoute.ts'

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/auth',router);

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(process.env.SERVER_PORT || 4000, () => {
  console.log("server is served");
});
