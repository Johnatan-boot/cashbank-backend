import { createUserService } from "./create-user.service";

export async function createUserController(
  request: { body: { name: any; email: any; password: any } },
  reply: { send: (arg0: { message: string }) => any },
) {
  const { name, email, password } = request.body;

  const result = await createUserService({
    name,
    email,
    password,
  });

  return reply.send(result);
}
