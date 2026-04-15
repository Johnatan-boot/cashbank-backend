const transactions: any[] = [];

export const transactionRepository = {
  create(transaction: any) {
    transactions.push(transaction);
  },

  findByAccountId(accountId: string) {
    return transactions.filter(
      (t) =>
        t.fromAccountId === accountId ||
        t.toAccountId === accountId
    );
  },
};