import passport from "passport";
import { Strategy as LocalStrategy, VerifyFunction } from "passport-local";
import bcrypt from "bcryptjs";
const db = require("../models/index");

const verify: VerifyFunction = async (email, password, done) => {
  try {
    const user = await db.Users.findOne({
      where: {
        email: email,
      },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      return done(null, user);
    }
    return done(null, false, {
      message: "認証情報と一致するレコードがありません。",
    });
  } catch (error: any) {
    console.error(error);
    return done(null, false, { message: error.toString() });
  }
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    verify
  )
);

export interface SessionUser extends Express.User {
  id?: string;
  name?: string;
}

// Session
passport.serializeUser((user: SessionUser, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await db.Users.findOne({
      where: {
        id: id,
      },
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
