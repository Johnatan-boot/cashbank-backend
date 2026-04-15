import { accountRepository } from "../../accounts/repositories/account.repository";
import { transactionRepository } from "../repositories/transaction.repository";

export async function transferService({
  userId,
  toAccountId,
  amount,
}: any) {
  const fromAccount = accountRepository.findByUserId(userId);

  if (!fromAccount) {
    throw new Error("Source account not found");
  }

  // ⚠️ AQUI AJUSTE IMPORTANTE
const toAccount = accountRepository.findByAccountId(toAccountId);

  if (!toAccount) {
    throw new Error("Destination account not found");
  }

  if (fromAccount.balance < amount) {
    throw new Error("Insufficient funds");
  }

  // 💸 operação
  fromAccount.balance -= amount;
  toAccount.balance += amount;

  const transaction = {
    id: crypto.randomUUID(),
    fromAccountId: fromAccount.id,
    toAccountId: toAccount.id,
    amount,
    createdAt: new Date(),
  };

  transactionRepository.create(transaction);

  return {
    message: "Transfer completed",
    transaction,
  };
}