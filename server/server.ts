import express, { Request, Response } from 'express';
import NameController from "./controllers/nameController";

const app = express();
const port = 5000;

app.get('/api/hello', (req: Request, res: Response) => {
  console.log("Hello");
  res.send('Hello from Express!');
});

app.get('/api/:genre', NameController.getAdjectives, NameController.getNouns, (req: Request, res: Response) => {
  res.status(200).json(res.locals);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});