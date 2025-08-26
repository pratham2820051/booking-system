import { type User, type InsertUser, type Bus, type InsertBus, type SearchQuery, type InsertSearchQuery } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  searchBuses(source: string, destination: string, date: string): Promise<Bus[]>;
  createBus(bus: InsertBus): Promise<Bus>;
  getBus(id: string): Promise<Bus | undefined>;
  
  createSearchQuery(query: InsertSearchQuery): Promise<SearchQuery>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private buses: Map<string, Bus>;
  private searchQueries: Map<string, SearchQuery>;

  constructor() {
    this.users = new Map();
    this.buses = new Map();
    this.searchQueries = new Map();
    this.seedBuses();
  }

  private seedBuses() {
    // Seed with sample bus data for demonstration
    const sampleBuses: InsertBus[] = [
      {
        operator: "IntrCity SmartBus",
        busType: "AC Seater / Sleeper (2+1)",
        source: "Delhi",
        destination: "Mumbai", 
        departureTime: "18:30",
        arrivalTime: "09:00",
        duration: "14h 30m",
        price: 1250,
        originalPrice: 1450,
        availableSeats: 18,
        totalSeats: 45,
        rating: 42, // 4.2 * 10
        totalRatings: 856,
        amenities: ["Live Tracking", "AC", "Charging Point"],
        isAc: true,
        isSleeper: true,
        hasWifi: false,
        hasCharging: true,
        hasMeals: false,
        hasLiveTracking: true,
      },
      {
        operator: "VRL Travels",
        busType: "AC Sleeper (2+1)",
        source: "Delhi",
        destination: "Mumbai",
        departureTime: "20:15", 
        arrivalTime: "10:00",
        duration: "13h 45m",
        price: 1580,
        originalPrice: 1750,
        availableSeats: 7,
        totalSeats: 36,
        rating: 45, // 4.5 * 10
        totalRatings: 1234,
        amenities: ["Live Tracking", "AC", "Sleeper", "Meals"],
        isAc: true,
        isSleeper: true,
        hasWifi: false,
        hasCharging: false,
        hasMeals: true,
        hasLiveTracking: true,
      },
      {
        operator: "Shatabdi Travels", 
        busType: "AC Seater (2+2)",
        source: "Delhi",
        destination: "Mumbai",
        departureTime: "22:45",
        arrivalTime: "14:00",
        duration: "15h 15m", 
        price: 980,
        originalPrice: 1150,
        availableSeats: 24,
        totalSeats: 48,
        rating: 39, // 3.9 * 10
        totalRatings: 542,
        amenities: ["AC", "Charging Point"],
        isAc: true,
        isSleeper: false,
        hasWifi: false,
        hasCharging: true,
        hasMeals: false,
        hasLiveTracking: false,
      },
      // Add more routes
      {
        operator: "Orange Tours", 
        busType: "AC Sleeper (2+1)",
        source: "Bangalore",
        destination: "Chennai",
        departureTime: "21:00",
        arrivalTime: "06:30",
        duration: "9h 30m",
        price: 950,
        originalPrice: 1100,
        availableSeats: 12,
        totalSeats: 30,
        rating: 43, // 4.3 * 10
        totalRatings: 678,
        amenities: ["Live Tracking", "AC", "Sleeper", "Wifi"],
        isAc: true,
        isSleeper: true,
        hasWifi: true,
        hasCharging: true,
        hasMeals: false,
        hasLiveTracking: true,
      },
      {
        operator: "KPN Travels",
        busType: "AC Seater (2+2)",
        source: "Pune",
        destination: "Goa",
        departureTime: "23:30",
        arrivalTime: "08:45",
        duration: "9h 15m",
        price: 780,
        originalPrice: 850,
        availableSeats: 16,
        totalSeats: 40,
        rating: 40, // 4.0 * 10
        totalRatings: 423,
        amenities: ["AC", "Charging Point"],
        isAc: true,
        isSleeper: false,
        hasWifi: false,
        hasCharging: true,
        hasMeals: false,
        hasLiveTracking: false,
      }
    ];

    sampleBuses.forEach(bus => {
      const id = randomUUID();
      const busWithId: Bus = { ...bus, id };
      this.buses.set(id, busWithId);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async searchBuses(source: string, destination: string, date: string): Promise<Bus[]> {
    // Filter buses by source and destination (case insensitive)
    const buses = Array.from(this.buses.values()).filter(
      bus => 
        bus.source.toLowerCase() === source.toLowerCase() &&
        bus.destination.toLowerCase() === destination.toLowerCase()
    );
    
    // In a real implementation, you would also filter by date
    // For now, return all matching buses
    return buses;
  }

  async createBus(insertBus: InsertBus): Promise<Bus> {
    const id = randomUUID();
    const bus: Bus = { ...insertBus, id };
    this.buses.set(id, bus);
    return bus;
  }

  async getBus(id: string): Promise<Bus | undefined> {
    return this.buses.get(id);
  }

  async createSearchQuery(insertQuery: InsertSearchQuery): Promise<SearchQuery> {
    const id = randomUUID();
    const query: SearchQuery = { 
      ...insertQuery, 
      id,
      createdAt: new Date()
    };
    this.searchQueries.set(id, query);
    return query;
  }
}

export const storage = new MemStorage();
