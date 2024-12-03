import { responsiveProperty } from "@mui/material/styles/cssUtils";
import { NextResponse, NextRequest } from "next/server";
import { useStoreBomba } from "./hooks/store";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse) {
	console.log(request);

	if (request.nextUrl.pathname.startsWith("/redirect")) {
		console.log(request.nextUrl.basePath);
		console.log(response);
		return NextResponse.redirect(new URL("/", request.url));
	}
	// return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
	matcher: [
		"/",
		"/:redirect*",
		"/empresa",
		"/empresa/registrar",
		"/empresa/login",
	],
};
