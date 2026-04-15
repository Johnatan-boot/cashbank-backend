import { FastifyInstance } from "fastify";
import { createAccountController } from "./create-account/create-account.controller";
import { getBalanceController } from "./get-balance/get-balance.controller";
import { authMiddleware } from "../auth/middleware/auth.middleware";

export async function accountRoutes(app: FastifyInstance) {
    // 🏦 criar conta
  app.post(
    "/accounts",
    { preHandler: authMiddleware as any },
    createAccountController as any
  );

  // 💰 ver saldo
  app.get(
    "/accounts/balance",
    { preHandler: authMiddleware as any },
    getBalanceController as any
  );
}