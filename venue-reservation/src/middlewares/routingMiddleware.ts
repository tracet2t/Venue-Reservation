import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { isUrlAllowed } from "@/lib/extras";
import { getSession } from "@/server-actions/getSession";

const mentorBlacklist = ["/admin"];
const studentBlacklist = [...mentorBlacklist, "/restricted"];

export function withRoleBasedRoutingMiddleware(
  next: NextMiddleware
): NextMiddleware {
  return async (req: NextRequest, event) => {
    const session = await getSession(req.cookies);
    const role = session?.getRole();
    const { pathname } = req.nextUrl;

    const blacklist =
      role === "regular" ? studentBlacklist : mentorBlacklist;

    if (!isUrlAllowed(pathname, blacklist)) {
      return NextResponse.redirect(`${process.env.BASE_URL}/unauthorized`);
    }

    return next(req, event);
  };
}
