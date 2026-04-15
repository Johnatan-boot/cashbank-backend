import { loginService } from "./login.service";

// login.controller.ts
// login.controller.ts
export async function loginController(request: { body: { email: any; password: any; }; server: any; }, reply: { send: (arg0: { token: any; }) => any; }) {
  const { email, password } = request.body;

  const result = await loginService({
    email,
    password,
    app: request.server // ✅ AQUI
  });

  return reply.send(result);
}