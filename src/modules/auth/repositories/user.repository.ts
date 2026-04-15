// user.repository.ts
const users: any[] = [];

export const userRepository = {
  create(user: any) {
    users.push(user);
  },

  findByEmail(email: string) {
    return users.find((u) => u.email === email);
  },
};