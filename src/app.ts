import Fastify from "fastify";
import jwt from "@fastify/jwt";
import { authRoutes } from "./modules/auth/routes";
import { accountRoutes } from "./modules/accounts/routes";
import { transactionRoutes } from "./modules/transactions/routes";


export const app = Fastify({
  logger: true,
});

app.register(jwt, {
  secret: "cashbank-secret-key",
});



app.get("/", async () => {
  return {
    service: "CASHBANK API",
    status: "running",
  };
});

//PLUGINS
app.register(authRoutes);
app.register(accountRoutes);
app.register(transactionRoutes);
