import { accountRepository } from "../repositories/account.repository";

export async function createAccountService(userId: string) {
  // 🚫 impedir duplicidade
  const existingAccount = accountRepository.findByUserId(userId);

  if (existingAccount) {
    throw new Error("User already has an account");
  }

  const account = {
  id: crypto.randomUUID(),
  userId,
  balance: 1000, // 👈 AQUI SIM
  createdAt: new Date(),
   };

  accountRepository.create(account);

  return {
    message: "Account created successfully",
    account,
  };
}