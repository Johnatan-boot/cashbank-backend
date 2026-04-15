import { getHistoryService } from "./history.service";

export async function getHistoryController(request: any, reply: any) {
  const userId = request.user.userId;

  const transactions = await getHistoryService(userId);

  return reply.send({
    transactions,
  });
}