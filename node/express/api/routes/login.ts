import { getLogin, postLogin } from "../controllers/login";
import express from "express";
const router = express.Router();

router.get("/", getLogin);

router.post("/", postLogin);

export { router };
