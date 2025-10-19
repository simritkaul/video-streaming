import { Router } from "express";
import upload from "../multer.js";
import { uploadFile } from "../controllers/upload.controller";

const router = Router();

router.post("/upload", upload.single("file"), uploadFile);

export default router;
