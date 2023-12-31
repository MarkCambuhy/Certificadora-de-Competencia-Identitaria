import express from "express";
import cors from "cors";
import routes from "./src/routes/routes.js";

const app = express();

app.use(cors());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", routes);

app.use((req, res) => {
  res.status(404).json({ 
    message: 'Conteúdo não encontrado',
    path: req.path
  });
});

app.listen(3000, () => console.log('Server HTTP on.'));