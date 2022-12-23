import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { getChats, postChats } from "../../controllers/local/chat";
import { PLANS } from "../../controllers/plan";
import { TENANT_NAME } from "../../controllers/tenant";

router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect(302, "/login");
    }
  },
  async (req: Request, res: Response) => {
    try {
      const messages = await getChats();
      res.render("local/chat", {
        messages: messages,
        plans: PLANS,
        tenant_name: TENANT_NAME,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/local/chat");
    }
  }
);

router.post("/", async (req: Request, res: Response) => {
  try {
    await postChats(req);
  } catch (error) {
    console.error(error);
  }
  res.redirect("/local/chat");
});

export { router };
