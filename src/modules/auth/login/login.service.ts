// login.service.ts
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user.repository";

// login.service.ts
export async function loginService({ email, password, app }: { email: any; password: any; app: any }) {
  const user = userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = app.jwt.sign({
    userId: user.id,
    email: user.email,
  });

  return { token };
}