import { SessionUser } from "config/passport";
import { TENANT_ID, TENANT_NAME } from "./tenant";
import { Request, Response } from "express";
import { PLANS } from "./plan";
const db = require("./../models/index");

const getChats = async (req: Request, res: Response) => {
  try {
    const messages = await db.Messages.findAll({
      where: {
        tenant_id: TENANT_ID,
      },
    });
    res.render("chat", {
      messages: messages,
      plans: PLANS,
      tenant_name: TENANT_NAME,
    });
  } catch (error) {
    console.error(error);
    res.redirect("/chat");
  }
};

const postChats = async (req: Request, res: Response) => {
  const mes = req.body.message;
  const sessionUser: SessionUser = req.user || {};
  const userName = sessionUser.name;
  try {
    await db.Messages.create({
      tenant_id: TENANT_ID,
      user_id: userName,
      message: mes,
    });
  } catch (error) {
    console.error(error);
  }
  res.redirect("/chat");
};

export { getChats, postChats };
