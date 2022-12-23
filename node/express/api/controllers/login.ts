import { SessionUser } from "config/passport";
import { Request, Response, NextFunction } from "express";
import passport from "passport";

const getLogin = async (req: Request, res: Response) => {
  res.render("login", {
    errorMessage: "",
  });
};

const postLogin = async (req: Request, res: Response, next: NextFunction) => {
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
      return res.redirect("/chat");
    });
  })(req, res, next);
};

export { getLogin, postLogin };
