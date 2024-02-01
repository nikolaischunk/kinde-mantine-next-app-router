import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';

export default function middleware(req: Request) {
	return withAuth(req);
}

export const config = {
	matcher: ['/protected'],
	// matcher: [
	// 	/*
	// 	 * Match all request paths except for the ones starting with:
	// 	 * - api (API routes)
	// 	 * - _next/static (static files)
	// 	 * - _next/image (image optimization files)
	// 	 * - favicon.ico (favicon file)
	// 	 */
	// 	'/((?!api|_next/static|_next/image|favicon.ico).*)',
	// ],
};
