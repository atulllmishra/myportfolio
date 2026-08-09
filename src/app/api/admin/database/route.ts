import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/db";

export async function GET() {
  const db = getDatabase();

  return NextResponse.json({
    success: true,
    stats: {
      totalVisitors: db.visitorCount,
      totalContacts: db.contacts.length,
      totalVisitorLogs: db.visitorLogs.length,
      lastUpdated: db.updatedAt,
    },
    contacts: db.contacts.slice(0, 50),
    recentVisitorLogs: db.visitorLogs.slice(0, 50),
  });
}
