import { NextResponse } from "next/server";
import { getDatabase, recordVisitor } from "@/lib/db";

export async function GET() {
  const db = getDatabase();
  return NextResponse.json({
    count: db.visitorCount,
    totalLogs: db.visitorLogs.length,
    updatedAt: db.updatedAt,
  });
}

export async function POST(request: Request) {
  let clientCount = 0;
  let page = "/";

  try {
    const body = await request.json();
    if (body && typeof body.clientCount === "number" && !isNaN(body.clientCount)) {
      clientCount = body.clientCount;
    }
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

  const result = recordVisitor({
    clientCount,
    userAgent,
    referrer,
    page,
    ip,
  });

  return NextResponse.json({
    count: result.count,
    logId: result.log.id,
    timestamp: result.log.timestamp,
  });
}
