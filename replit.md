# Bus Booking Platform

## Overview

This is a full-stack bus booking platform built with React and Express, designed to provide users with a seamless experience for searching and booking bus tickets across India. The application features a modern, responsive interface with comprehensive bus search functionality, filtering capabilities, and a clean design system built with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the entire stack
- **API Design**: RESTful API with structured error handling and logging middleware
- **Data Storage**: In-memory storage with interface-based design for easy database migration
- **Validation**: Zod schemas shared between client and server for consistent validation

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Well-structured tables for users, buses, and search queries with proper relationships
- **Migration**: Drizzle Kit for database schema migrations and management

### Shared Architecture
- **Type Safety**: Shared TypeScript types and Zod schemas between frontend and backend
- **Code Organization**: Monorepo structure with clear separation of client, server, and shared code
- **Path Aliases**: Configured path mapping for clean imports and better code organization

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect support

### UI Components
- **Radix UI**: Headless, accessible UI primitives for building the component system
- **shadcn/ui**: Pre-built component library with customizable design tokens
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire codebase
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration

### Third-party Services
- **Google Fonts**: Web fonts (Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono)
- **Unsplash**: Stock photography for UI imagery and backgrounds
- **Replit**: Development environment integration with specific plugins and banners