import { MiddlewareConfig, NextRequest, NextResponse as response } from "next/server";

export function proxy(request: NextRequest) {
  
  return response.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api/trpc|api|_next/static|_next/image|.*\\.png$).*)"
  ]
};