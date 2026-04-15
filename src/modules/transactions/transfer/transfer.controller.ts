import { transferService } from "./transfer.service";

export async function transferController(request: any, reply: any) {
  const userId = request.user.userId;
  const { toAccountId, amount } = request.body;

  const result = await transferService({
    userId,
    toAccountId,
    amount,
  });

  return reply.send(result);
}