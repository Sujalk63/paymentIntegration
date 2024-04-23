import express, { json } from "express";
import paymentRoute from "./routes/paymentRoute.js";
import { config } from "dotenv";
// import router from "./routes/paymentRoute.js";
// import {router} from "./routes/paymentRoute.js"
import cors from "cors"

config({ path: "./config/config.env" });

export const app = express();
app.use(express.json());
app.use(cors())

app.use("/api", paymentRoute);
