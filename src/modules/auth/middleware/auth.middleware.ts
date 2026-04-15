// auth.middleware.ts
export async function authMiddleware(
  request: { jwtVerify: () => Promise<void> },
  reply: { status: (arg0: number) => { send: (arg0: { message: string }) => any } }
) {
  try {
    await request.jwtVerify();
  } catch {
    return reply.status(401).send({ message: "Unauthorized" });
  }
}