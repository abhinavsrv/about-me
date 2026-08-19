import { describe, expect, it } from "vitest";
import { portfolioItems, profileRecords, siteSettings } from "../drizzle/schema";

describe("persistent portfolio schema", () => {
  it("keeps the public work explorer, profile archive, and site settings as separate durable records", () => {
    expect(Object.keys(portfolioItems)).toEqual(expect.arrayContaining([
      "slug", "itemType", "focus", "details", "published", "sortOrder",
    ]));
    expect(Object.keys(profileRecords)).toEqual(expect.arrayContaining([
      "recordType", "summary", "sourceNote", "published", "sortOrder",
    ]));
    expect(Object.keys(siteSettings)).toEqual(expect.arrayContaining(["settingKey", "value"]));
  });
});
