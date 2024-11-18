import { isUrlAllowed } from "@/lib/extras";
import { getSession } from "@/server-actions/getSession";

import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const mentorRoutingBlacklist = ['/admin'];
const studentRoutingBlacklist = [...mentorRoutingBlacklist,'/admin'];

export function withRoleBasedRoutingMiddleware(middleware: NextMiddleware): NextMiddleware {
    return async (request: NextRequest, event: NextFetchEvent) => {

        const session = (await getSession(request.cookies));

        const role = session.getRole();
        console.log(role)
        console.log(request.nextUrl.pathname);

        console.log(!isUrlAllowed(request.nextUrl.pathname, studentRoutingBlacklist))

        if (role === 'regular' && !isUrlAllowed(request.nextUrl.pathname, studentRoutingBlacklist)) {
            return NextResponse.redirect(`${process.env.BASE_URL}/unauthorized`);
        }

        if (role === 'admin' && !isUrlAllowed(request.nextUrl.pathname, mentorRoutingBlacklist)) {
            return NextResponse.redirect(`${process.env.BASE_URL}/unauthorized`);
        }

        return middleware(request, event);
    }
}