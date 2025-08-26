import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const buses = pgTable("buses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  operator: text("operator").notNull(),
  busType: text("bus_type").notNull(), // AC Seater, AC Sleeper, etc.
  source: text("source").notNull(),
  destination: text("destination").notNull(),
  departureTime: text("departure_time").notNull(),
  arrivalTime: text("arrival_time").notNull(),
  duration: text("duration").notNull(),
  price: integer("price").notNull(),
  originalPrice: integer("original_price"),
  availableSeats: integer("available_seats").notNull(),
  totalSeats: integer("total_seats").notNull(),
  rating: integer("rating").notNull(), // out of 50 (4.2 * 10 = 42)
  totalRatings: integer("total_ratings").notNull(),
  amenities: text("amenities").array().notNull().default([]),
  isAc: boolean("is_ac").notNull().default(false),
  isSleeper: boolean("is_sleeper").notNull().default(false),
  hasWifi: boolean("has_wifi").notNull().default(false),
  hasCharging: boolean("has_charging").notNull().default(false),
  hasMeals: boolean("has_meals").notNull().default(false),
  hasLiveTracking: boolean("has_live_tracking").notNull().default(false),
});

export const searchQueries = pgTable("search_queries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  source: text("source").notNull(),
  destination: text("destination").notNull(),
  travelDate: text("travel_date").notNull(),
  passengers: integer("passengers").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBusSchema = createInsertSchema(buses).omit({
  id: true,
});

export const insertSearchQuerySchema = createInsertSchema(searchQueries).omit({
  id: true,
  createdAt: true,
});

export const busSearchSchema = z.object({
  source: z.string().min(1, "Source city is required"),
  destination: z.string().min(1, "Destination city is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  passengers: z.number().min(1).max(9).default(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Bus = typeof buses.$inferSelect;
export type InsertBus = z.infer<typeof insertBusSchema>;
export type SearchQuery = typeof searchQueries.$inferSelect;
export type InsertSearchQuery = z.infer<typeof insertSearchQuerySchema>;
export type BusSearchParams = z.infer<typeof busSearchSchema>;
