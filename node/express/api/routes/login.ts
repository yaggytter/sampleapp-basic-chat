import { SessionUser } from "config/passport";
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import passport from "passport";

router.get("/", async (req: Request, res: Response) => {
  res.render("login", {
    errorMessage: "",
  });
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (err: any, user: SessionUser, info: any) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render("login", {
        errorMessage: info.message,
      });
    }
    req.logIn(user, (err: any) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/local/chat");
    });
  })(req, res, next);
});

export { router };
