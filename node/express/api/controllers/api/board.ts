import { Request, Response } from "express";
const db = require("../../models/index");
import { TENANT_ID } from "../tenant";

const getBoard = async (req: Request, res: Response) => {
  try {
    const messages = await db.Messages.findAll({
      where: {
        tenant_id: TENANT_ID,
      },
    });
    return res.json(messages);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ redirect_url: process.env.SAASUS_LOGIN_URL || "" });
  }
};

const post = async (req: Request, res: Response) => {
  const mes = req.body.message;
  const userName = "テストユーザー";
  try {
    await db.Messages.create({
      tenant_id: TENANT_ID,
      user_id: userName,
      message: mes,
    });
  } catch (error) {
    console.error(error);
  }
};

export { getBoard, post };
