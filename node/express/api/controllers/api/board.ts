import { Request, Response } from "express";
import { UpdateMeteringUnitDateCountTodayParam } from "saasus-sdk/dist/generated/Pricing";
const db = require("../../models/index");
import { findUpperCountByMeteringUnitName, PricingClient } from "saasus-sdk";

const getBoard = async (req: Request, res: Response) => {
  try {
    const messages = await db.Messages.findAll({
      where: {
        tenant_id: req.userInfo?.tenants[0].id,
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
  const tenantId = req.userInfo?.tenants[0].id || "";
  const planId = req.userInfo?.tenants[0].plan_id || "";
  const userName =
    req.userInfo?.tenants[0].user_attribute.username || "テストユーザー";
  try {
    const pricingClient = new PricingClient();
    const pricingPlan = await pricingClient.pricingPlansApi.getPricingPlan(
      planId
    );
    const meteringUnitName = "comment_count";
    const meteringUnitCountData =
      await pricingClient.meteringApi.getMeteringUnitDateCountByTenantIdAndUnitNameToday(
        tenantId,
        meteringUnitName
      );
    const upper = findUpperCountByMeteringUnitName(
      pricingPlan.data,
      meteringUnitName
    );
    if (meteringUnitCountData.data.count < upper || upper === 0) {
      await db.Messages.create({
        tenant_id: tenantId,
        user_id: userName,
        message: mes,
      });
      let param: UpdateMeteringUnitDateCountTodayParam = {
        method: "add",
        count: 1,
      };
      const res =
        await pricingClient.meteringApi.updateMeteringUnitDateCountToday(
          tenantId,
          meteringUnitName,
          param
        );
    }
  } catch (error) {
    console.error(error);
  }
};

export { getBoard, post };
