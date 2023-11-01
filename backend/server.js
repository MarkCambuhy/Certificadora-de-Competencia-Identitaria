import express from "express";
import cors from "cors";

import { UserController } from "./controllers/UserController.js";

const app = express();

app.use(cors);
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

<<<<<<< Updated upstream
=======
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/registration", (req, res) => UserController.registration(req, res));

app.get("/user", (req, res) => UserController.getUser(req, res));

>>>>>>> Stashed changes
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Conteúdo não encontrado',
    path: req.path
  });
});

app.listen(3000, () => console.log('Server HTTP on.'));