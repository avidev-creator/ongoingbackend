import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env",
});

const app = express();

connectDb().then(
  app.listen(process.env.PORT, () => {
    console.log(`Api is running on ${process.env.PORT}`);
  })
);

app.use(
  cors({
    origin: process.env.CORS_ENV,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

// routes import

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);
