import cookieParser from "cookie-parser";
import express from "express";
import { validateAccessToken } from "./middlewares/auth.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const publicPath = path.join(dirname(__filename), "public");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(publicPath));

app.use(cookieParser());

app.use(validateAccessToken());

export default app;
