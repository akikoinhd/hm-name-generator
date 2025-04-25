    // server/server.ts
    import express, { Request, Response } from 'express';
    const app = express();
    const port = 5000;

    app.get('/api/hello', (req: Request, res: Response) => {
      res.send('Hello from Express!');
    });

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });