import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
});