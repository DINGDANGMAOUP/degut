import { auth } from "@/auth";
import { type NextRequest, NextResponse } from "next/server";

export default auth(async function middleware(req: NextRequest) {
	if (req.nextUrl.pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/", req.url));
	}
});

export const config = {
	runtime: "nodejs",
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
