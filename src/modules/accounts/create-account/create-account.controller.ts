import { createAccountService } from "./create-account.service";

export async function createAccountController(request: any, reply: any) {
  const userId = request.user.userId;

  const result = await createAccountService(userId);

  return reply.send(result);
}