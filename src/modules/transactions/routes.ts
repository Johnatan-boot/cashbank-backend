import { FastifyInstance } from "fastify";
import { transferController } from "./transfer/transfer.controller";
import { getHistoryController } from "./history/history.controller";
import { authMiddleware } from "../auth/middleware/auth.middleware";

export async function transactionRoutes(app: FastifyInstance) {
  app.post(
    "/transactions/transfer",
    { preHandler: authMiddleware as any },
    transferController as any
  );

  app.get(
  "/transactions/history",
  { preHandler: authMiddleware as any },
  getHistoryController as any
);
}