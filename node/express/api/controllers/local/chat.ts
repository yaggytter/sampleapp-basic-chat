import { SessionUser } from "config/passport";
import { TENANT_ID } from "../tenant";
import { Request } from "express";
const db = require("../../models/index");

const getChats = async () => {
  const messages = await db.Messages.findAll({
    where: {
      tenant_id: TENANT_ID,
    },
  });
  return messages;
};

const postChats = async (req: Request) => {
  const mes = req.body.message;
  const sessionUser: SessionUser = req.user || {};
  const userName = sessionUser.name;
  await db.Messages.create({
    tenant_id: TENANT_ID,
    user_id: userName,
    message: mes,
  });
};

export { getChats, postChats };
