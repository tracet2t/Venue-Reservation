import { chain } from "./middlewares/chain";
import { withAuthMiddleware } from "./middlewares/auth-middleware";
import { withRoleBasedRoutingMiddleware } from "./middlewares/routingMiddleware";

export default chain([withAuthMiddleware, withRoleBasedRoutingMiddleware]);

export const config = {
  matcher: [
    '/((?!login|api/auth/login|_next/static|_next/image|favicon.ico|api/auth/logout|api/auth/user|card_view|signup-link|api/venues|reservations|layouts/Header|api/auth/signin|api/auth/callback|api/auth/signout|user-profile|api/user/profile|api/auth/[...nextauth]|my-reservations/page|my_reservation_card|api/myreservation).*)',
  ]
};