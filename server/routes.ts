import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { busSearchSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Bus search endpoint
  app.get("/api/buses/search", async (req, res) => {
    try {
      const { source, destination, date, passengers } = req.query;
      
      // Validate query parameters
      const validatedParams = busSearchSchema.parse({
        source,
        destination, 
        travelDate: date,
        passengers: passengers ? parseInt(passengers as string) : 1
      });

      // Search for buses
      const buses = await storage.searchBuses(
        validatedParams.source,
        validatedParams.destination,
        validatedParams.travelDate
      );

      // Log the search query (optional)
      await storage.createSearchQuery({
        source: validatedParams.source,
        destination: validatedParams.destination,
        travelDate: validatedParams.travelDate,
        passengers: validatedParams.passengers
      });

      res.json(buses);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid search parameters",
          errors: error.errors 
        });
      }
      
      console.error("Bus search error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get bus by ID
  app.get("/api/buses/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const bus = await storage.getBus(id);
      
      if (!bus) {
        return res.status(404).json({ message: "Bus not found" });
      }
      
      res.json(bus);
    } catch (error) {
      console.error("Get bus error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
