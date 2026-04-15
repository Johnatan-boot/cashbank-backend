import { transactionRepository } from "../repositories/transaction.repository";
import { accountRepository } from "../../accounts/repositories/account.repository";

export async function getHistoryService(userId: string) {
  const account = accountRepository.findByUserId(userId);

  if (!account) {
    throw new Error("Account not found");
  }

  const transactions = transactionRepository.findByAccountId(account.id);

  return transactions;
}