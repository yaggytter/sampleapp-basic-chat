import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { getChats, postChats } from "../controllers/chat";

router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect(302, "/login");
    }
  },
  getChats
);

router.post("/", postChats);

export { router };
