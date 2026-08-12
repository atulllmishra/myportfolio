import fs from "fs";
import path from "path";

export interface ContactRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  ip?: string;
  userAgent?: string;
  status: "new" | "read" | "replied";
}

export interface VisitorLog {
  id: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  page: string;
  ipHash?: string;
}

export interface PortfolioDatabase {
  visitorCount: number;
  pageViews?: number;
  updatedAt: string;
  contacts: ContactRecord[];
  visitorLogs: VisitorLog[];
  recentVisits?: Record<string, string>;
}

const DB_FILE_PATH = path.join(process.cwd(), "data", "portfolio_db.json");
const OLD_VISITOR_FILE = path.join(process.cwd(), "data", "visitor_count.json");

// Bot user agents pattern matching
const BOT_USER_AGENTS =
  /bot|googlebot|bingbot|yandexbot|duckduckbot|slurp|baiduspider|twitterbot|facebookexternalhit|bytespider|lighthouse|headless|phantomjs|puppeteer|selenium|curl|wget|python-requests|postman|preview|checker|monitoring|uptime/i;

// Default initial state
const DEFAULT_DB: PortfolioDatabase = {
  visitorCount: 0,
  pageViews: 0,
  updatedAt: new Date().toISOString(),
  contacts: [],
  visitorLogs: [],
  recentVisits: {},
};

// In-memory cache for fast response times
let memoryDb: PortfolioDatabase | null = null;

function ensureDirExists(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Loads the current database from disk or memory cache.
 */
export function getDatabase(): PortfolioDatabase {
  if (memoryDb) {
    return memoryDb;
  }

  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const content = fs.readFileSync(DB_FILE_PATH, "utf8");
      const parsed = JSON.parse(content);
      const vCount = typeof parsed.visitorCount === "number" ? parsed.visitorCount : 0;
      memoryDb = {
        visitorCount: vCount,
        pageViews: typeof parsed.pageViews === "number" ? parsed.pageViews : vCount,
        updatedAt: parsed.updatedAt || new Date().toISOString(),
        contacts: Array.isArray(parsed.contacts) ? parsed.contacts : [],
        visitorLogs: Array.isArray(parsed.visitorLogs) ? parsed.visitorLogs : [],
        recentVisits:
          typeof parsed.recentVisits === "object" && parsed.recentVisits !== null
            ? parsed.recentVisits
            : {},
      };
      return memoryDb;
    }

    // Migration from old single-field visitor_count.json if present
    if (fs.existsSync(OLD_VISITOR_FILE)) {
      try {
        const oldContent = fs.readFileSync(OLD_VISITOR_FILE, "utf8");
        const oldParsed = JSON.parse(oldContent);
        if (typeof oldParsed.count === "number") {
          DEFAULT_DB.visitorCount = oldParsed.count;
          DEFAULT_DB.pageViews = oldParsed.count;
        }
      } catch (err) {
        console.warn("Failed to parse legacy visitor_count.json:", err);
      }
    }
  } catch (err) {
    console.error("Error reading database file:", err);
  }

  memoryDb = { ...DEFAULT_DB };
  saveDatabase(memoryDb);
  return memoryDb;
}

/**
 * Persists database updates to disk.
 */
export function saveDatabase(db: PortfolioDatabase): boolean {
  memoryDb = db;
  try {
    ensureDirExists(DB_FILE_PATH);
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving database file:", err);
    return false;
  }
}

/**
 * Collects a new visitor log & updates the total visitor count.
 */
export function recordVisitor(metadata: {
  userAgent?: string;
  referrer?: string;
  page?: string;
  ip?: string;
  visitorId?: string;
  hasSessionCookie?: boolean;
}): { count: number; pageViews: number; isNewVisitor: boolean; visitorId: string } {
  const db = getDatabase();

  const userAgent = metadata.userAgent || "Unknown Device";
  const now = Date.now();

  // 1. Ignore automated crawler bots
  if (BOT_USER_AGENTS.test(userAgent)) {
    return {
      count: db.visitorCount,
      pageViews: db.pageViews || db.visitorCount,
      isNewVisitor: false,
      visitorId: metadata.visitorId || "bot",
    };
  }

  // Every new visitor session adds +1 to the central counter
  const isNewVisitor = !metadata.hasSessionCookie;

  if (isNewVisitor) {
    db.visitorCount += 1;
  }

  db.pageViews = (db.pageViews || 0) + 1;
  db.updatedAt = new Date().toISOString();

  // Log the visit centrally in portfolio_db.json
  if (isNewVisitor) {
    const log: VisitorLog = {
      id: `v_${now}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: db.updatedAt,
      userAgent: userAgent.substring(0, 200),
      referrer: (metadata.referrer || "Direct / None").substring(0, 200),
      page: metadata.page || "/",
      ipHash: simpleHash(metadata.ip || "unknown"),
    };
    db.visitorLogs.unshift(log);
    if (db.visitorLogs.length > 500) {
      db.visitorLogs = db.visitorLogs.slice(0, 500);
    }
  }

  // Persist to central DB file on disk
  saveDatabase(db);

  const visitorId = metadata.visitorId || `vid_${now}_${Math.random().toString(36).substring(2, 9)}`;

  return {
    count: db.visitorCount,
    pageViews: db.pageViews,
    isNewVisitor,
    visitorId,
  };
}

/**
 * Adds a new contact form message submission to the database.
 */
export function addContactSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  ip?: string;
  userAgent?: string;
}): ContactRecord {
  const db = getDatabase();

  const record: ContactRecord = {
    id: `c_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone || "Not provided",
    subject: data.subject || "General Inquiry",
    message: data.message.trim(),
    createdAt: new Date().toISOString(),
    ip: data.ip,
    userAgent: data.userAgent,
    status: "new",
  };

  db.contacts.unshift(record);
  db.updatedAt = record.createdAt;
  saveDatabase(db);

  return record;
}

/**
 * Utility to hash IP addresses for user  privacy.
 */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return `ip_${Math.abs(hash).toString(36)}`;
}

/**
 * Generates a non-reversible combined hash for IP + UserAgent for deduplication
 */
function getVisitorHash(ip?: string, userAgent?: string): string {
  const raw = `${ip || "unknown"}_${userAgent || "unknown"}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return `vh_${Math.abs(hash).toString(36)}`;
}
