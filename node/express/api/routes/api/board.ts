import express from "express";
const router = express.Router();
import { getBoard, post } from "../../controllers/api/board";

router.get("/", getBoard);

router.post("/", post);

export { router };
