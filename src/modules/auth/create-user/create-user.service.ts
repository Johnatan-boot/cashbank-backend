// create-user.service.ts
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/user.repository";

export async function createUserService({
  name,
  email,
  password,
}: { name: any; email: any; password: any }) {  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    password: hashedPassword,
  };

  userRepository.create(user);

  return {
    message: "User created successfully",
  };
}