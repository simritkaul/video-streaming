import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);

app.use(express.json());

app.use("/uploads", express.static("../uploads"));

app.use("/api", routes);

export default app;
