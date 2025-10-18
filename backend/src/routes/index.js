import { Router } from "express";
import sampleRouter from "./sample.routes.js";

const router = Router();

router.use("/sample", sampleRouter);

export default router;
