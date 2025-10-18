import { Router } from "express";
import { sayHello } from "../controllers/sample.controller.js";

const router = Router();

router.get("/hello", sayHello);

export default router;
