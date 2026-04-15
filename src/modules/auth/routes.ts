import { FastifyInstance } from "fastify";
import { loginController } from "./login/login.controller";
import { createUserController } from "./create-user/create-user.controller";
import { authMiddleware } from "./middleware/auth.middleware";

export async function authRoutes(app: FastifyInstance) {
  app.post("/auth/register", createUserController as any);
  app.post("/auth/login", loginController as any);

  // 🔐 ROTA PROTEGIDA
  app.get(
    "/me",
    { preHandler: authMiddleware as any },
    async (request: any) => {
      return {
        user: request.user,
      };
    }
  );
}