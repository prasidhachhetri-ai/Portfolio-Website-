import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  kind: text("kind", { enum: ["contact", "consultation"] }).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  businessName: text("business_name"),
  phone: text("phone"),
  websiteUrl: text("website_url"),
  service: text("service"),
  message: text("message").notNull(),
  desiredOutcome: text("desired_outcome"),
  createdAt: text("created_at").notNull(),
});
