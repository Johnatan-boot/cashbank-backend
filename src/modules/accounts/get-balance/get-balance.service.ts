import { accountRepository } from "../repositories/account.repository";

export async function getBalanceService(userId: string) {
  const account = accountRepository.findByUserId(userId);

  if (!account) {
    throw new Error("Account not found");
  }

  return {
    balance: account.balance,
  };
}