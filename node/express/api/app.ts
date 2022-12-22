import createError from "http-errors";
import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

//authorization
//import passport from "./config/passport";
//import session from "express-session";

// route
import { router as chatRouter } from "./routes/chat";
//import { router as localChatRouter } from "./routes/local/chat";
import { router as apiBoardRouter } from "./routes/api/board";
import { router as callbackRouter } from "./routes/callback";
import { router as apiCallbackRouter } from "./routes/api/callback";
//import { router as loginRouter } from "./routes/login";
import { router as planRouter } from "./routes/plan";
import { router as tenantRouter } from "./routes/tenant";

//middleware
import { AuthMiddleware } from "saasus-sdk";

import cors from "cors";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app: Application = express();

// view engine setup
app.set("views", path.join("views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("public")));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  ["/chat", "/api/board", "/api/post", "/api/plan", "/api/tenant"],
  AuthMiddleware
);

app.use("/chat", chatRouter);

//app.use("/local/chat", localChatRouter);

app.use(["/api/board", "/api/post"], apiBoardRouter);

app.use("/callback", callbackRouter);

app.use("/api/callback", apiCallbackRouter);

app.use("/api/plan", planRouter);

app.use("/api/tenant", tenantRouter);

//app.use("/login", loginRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
