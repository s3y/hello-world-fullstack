import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import messageRouter from './routes/message.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', messageRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
}

export default app;
