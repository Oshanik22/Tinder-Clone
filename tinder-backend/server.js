import express from "express";
import { response } from "express";
import mongoose from "mongoose";

//App config
const app = express();
const port = process.env.PORT || 8001

//Middlewares

//DB Config

//API Endpoints
app.get('/', (req, res) => response.status(200).send('Hello World'));

//Listner
app.listen(port, () => console.log(`listening on localHost: ${port}`));