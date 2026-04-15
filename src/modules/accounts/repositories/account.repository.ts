import { Account } from "../interfaces/account.interface";

const accounts: Account[] = [];

export const accountRepository = {
  create(account: any) {
    accounts.push(account);
  },

  findByUserId(userId: string) {
    return accounts.find((acc) => acc.userId === userId);
  },

  findByAccountId(accountId: string) {
  return accounts.find((acc) => acc.id === accountId);
}
};