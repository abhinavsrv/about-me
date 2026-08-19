import { boolean, int, json, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/** Public research, applied-work, and technical-practice records. */
export const portfolioItems = mysqlTable("portfolioItems", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  itemType: mysqlEnum("itemType", ["research", "applied_work", "technical_practice"]).notNull(),
  category: varchar("category", { length: 120 }).notNull(),
  focus: varchar("focus", { length: 120 }).notNull(),
  status: varchar("status", { length: 180 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  evidence: text("evidence").notNull(),
  stack: json("stack").$type<string[]>().notNull(),
  details: json("details").$type<{ question: string; approach: string; evidence: string; scope: string }>().notNull(),
  sourceUrl: varchar("sourceUrl", { length: 500 }),
  sourceNote: varchar("sourceNote", { length: 255 }).notNull(),
  featured: boolean("featured").default(false).notNull(),
  published: boolean("published").default(true).notNull(),
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

/** Structured profile sections such as experience, education, credentials, or availability. */
export const profileRecords = mysqlTable("profileRecords", {
  id: int("id").autoincrement().primaryKey(),
  recordType: mysqlEnum("recordType", ["experience", "education", "credential", "language", "availability", "research_interest"]).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  organization: varchar("organization", { length: 255 }),
  periodLabel: varchar("periodLabel", { length: 120 }),
  locationLabel: varchar("locationLabel", { length: 180 }),
  summary: text("summary").notNull(),
  metadata: json("metadata").$type<Record<string, unknown>>(),
  sourceNote: varchar("sourceNote", { length: 255 }).notNull(),
  published: boolean("published").default(true).notNull(),
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

/** Small key-value settings used by the public portfolio shell and static export. */
export const siteSettings = mysqlTable("siteSettings", {
  id: int("id").autoincrement().primaryKey(),
  settingKey: varchar("settingKey", { length: 120 }).notNull().unique(),
  value: json("value").$type<unknown>().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertPortfolioItem = typeof portfolioItems.$inferInsert;
export type ProfileRecord = typeof profileRecords.$inferSelect;
export type InsertProfileRecord = typeof profileRecords.$inferInsert;
