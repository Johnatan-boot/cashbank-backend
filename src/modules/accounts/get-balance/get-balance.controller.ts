import { getBalanceService } from "./get-balance.service";

export async function getBalanceController(request: any, reply: any) {
  const userId = request.user.userId;

  const result = await getBalanceService(userId);

  return reply.send(result);
}