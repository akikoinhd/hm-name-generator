import express from "express";
import ViteExpress from "vite-express";
import NameController from "./controllers/nameController";

const app = express();

app.get("/hello", (_, res) => {
    console.log('hello')
    res.send("Hello from Express!");
});

app.get('/generate', NameController.getAdjectives, NameController.getNouns, (req, res) => {
    window.console.log("router")
    console.log("res.locals" + res.locals);
    res.status(200).send(res.locals);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);