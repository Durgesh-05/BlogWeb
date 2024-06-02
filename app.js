import cookieParser from "cookie-parser";
import express from "express";
import { validateAccessToken } from "./middlewares/auth.js";
const publicPath = path.join(__dirname, "public");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(publicPath));

app.use(cookieParser());

app.use(validateAccessToken());

export default app;
