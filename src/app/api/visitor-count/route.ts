import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "visitor_count.json");
const INITIAL_COUNT = 0;

let inMemoryCount = INITIAL_COUNT;

function getStoredCount(): number {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = fs.readFileSync(DATA_FILE_PATH, "utf8");
      const parsed = JSON.parse(fileData);
      if (typeof parsed.count === "number" && !isNaN(parsed.count)) {
        inMemoryCount = parsed.count;
        return parsed.count;
      }
    }
  } catch (err) {
    console.error("Error reading visitor count file:", err);
  }
  return inMemoryCount;
}

function saveStoredCount(count: number) {
  inMemoryCount = count;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      DATA_FILE_PATH,
      JSON.stringify({ count, updatedAt: new Date().toISOString() }, null, 2),
      "utf8"
    );
  } catch (err) {
    console.error("Error saving visitor count file:", err);
  }
}

export async function GET() {
  const count = getStoredCount();
  return NextResponse.json({ count });
}

export async function POST(request: Request) {
  let clientCount = 0;
  try {
    const body = await request.json();
    if (body && typeof body.clientCount === "number" && !isNaN(body.clientCount)) {
      clientCount = body.clientCount;
    }
  } catch {
    // Ignore JSON parsing errors if body is empty
  }

  const currentCount = getStoredCount();
  const baseCount = Math.max(currentCount, clientCount);
  const newCount = baseCount + 1;
  saveStoredCount(newCount);

  return NextResponse.json({ count: newCount });
}
