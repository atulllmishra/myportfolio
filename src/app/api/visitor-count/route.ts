import { NextResponse, type NextRequest } from "next/server";
import { getDatabase, recordVisitor } from "@/lib/db";

export async function GET() {
  const db = getDatabase();
  return NextResponse.json({
    success: true,
    count: db.visitorCount,
    pageViews: db.pageViews || db.visitorCount,
    totalLogs: db.visitorLogs.length,
    updatedAt: db.updatedAt,
  });
}

export async function POST(request: NextRequest) {
  let page = "/";

  try {
    const body = await request.json();
    if (body && typeof body.page === "string") {
      page = body.page;
    }
  } catch {
    // Ignore JSON parsing errors if body is empty
  }

  const userAgent = request.headers.get("user-agent") || undefined;
  const referrer = request.headers.get("referer") || request.headers.get("referrer") || undefined;
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined;

  const visitorIdCookie = request.cookies.get("pv_vid")?.value;
  const sessionCookie = request.cookies.get("pv_session")?.value;

  const result = recordVisitor({
    userAgent,
    referrer,
    page,
    ip,
    visitorId: visitorIdCookie,
    hasSessionCookie: Boolean(sessionCookie),
  });

  const response = NextResponse.json({
    success: true,
    count: result.count,
    pageViews: result.pageViews,
    isNewVisitor: result.isNewVisitor,
    timestamp: new Date().toISOString(),
  });

  // Set long-term visitor cookie (1 year)
  if (!visitorIdCookie) {
    response.cookies.set("pv_vid", result.visitorId, {
      path: "/",
      maxAge: 31536000, // 1 year
      sameSite: "lax",
      httpOnly: true,
    });
  }

  // Set session cookie (30 minutes sliding expiration)
  response.cookies.set("pv_session", "active", {
    path: "/",
    maxAge: 1800, // 30 minutes
    sameSite: "lax",
    httpOnly: true,
  });

  return response;
}
