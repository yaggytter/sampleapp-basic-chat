import express from "express";
const router = express.Router();
import { CallbackRouteFunction } from "saasus-sdk";

router.get("/", CallbackRouteFunction);

export { router };
