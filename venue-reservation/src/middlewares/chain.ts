import { NextMiddleware, NextResponse } from "next/server";

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export function chain(
  middlewares: MiddlewareFactory[],
  index = 0
): NextMiddleware {
  const current = middlewares[index];
  if (current) {
    const next = chain(middlewares, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}