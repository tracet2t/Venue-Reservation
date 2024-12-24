import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { isUrlAllowed } from "@/lib/extras";
import { getSession } from "@/server-actions/getSession";

const adminBlacklist = ["/admin"];
const userBlacklist = [...adminBlacklist, "/restricted"];

export function withRoleBasedRoutingMiddleware(
  next: NextMiddleware
): NextMiddleware {
  return async (req: NextRequest, event) => {
    const session = await getSession(req.cookies);
    const role = session?.getRole();
    const { pathname } = req.nextUrl;

    const blacklist =
      role === "regular" ? userBlacklist : adminBlacklist;

    if (!isUrlAllowed(pathname, blacklist)) {
      return NextResponse.redirect(`${process.env.BASE_URL}/unauthorized`);
    }

    return next(req, event);
  };
}
