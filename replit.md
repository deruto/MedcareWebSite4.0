# Medcare Dwarka Dental Clinic Website

## Overview

This is a modern dental clinic website built for Medcare Dwarka, featuring a comprehensive digital presence for a dental practice specializing in laser dentistry. The application is a full-stack web solution with a React frontend and Express.js backend, designed to showcase services, manage appointments, and support international dental tourism.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with the following key design decisions:

### Frontend Architecture
- **React with TypeScript**: Chosen for type safety and component-based architecture
- **Vite**: Selected as the build tool for fast development and optimized production builds
- **Wouter**: Lightweight client-side routing solution instead of React Router
- **TanStack Query**: For efficient server state management and API caching
- **Tailwind CSS + shadcn/ui**: Design system providing consistent, accessible UI components
- **React Hook Form + Zod**: Form handling with robust validation

### Backend Architecture
- **Express.js**: RESTful API server handling business logic and data operations
- **TypeScript**: Ensures type safety across the entire stack
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **Session-based architecture**: Prepared for user authentication (currently using in-memory storage)

### Database Design
- **PostgreSQL**: Configured via Drizzle ORM for production reliability
- **Schema-first approach**: Shared schema definitions between frontend and backend
- **Four main entities**: Users, Bookings, Contacts, and Smile Analysis requests

## Key Components

### Core Business Features
1. **Service Showcase**: Comprehensive dental services including laser dentistry, root canal, implants, pediatric care, smile design, and preventive care
2. **Appointment Booking**: Form-based booking system with service selection and contact information
3. **Contact Management**: General inquiry and contact form handling
4. **Smile Analysis**: Premium service allowing patients to upload photos for ₹2500 analysis fee
5. **Team Profiles**: Doctor and staff information display
6. **Dental Tourism**: International patient support with visa assistance and language selection

### Technical Components
1. **Responsive Design**: Mobile-first approach with Tailwind CSS
2. **Form Validation**: Zod schemas for consistent validation across forms
3. **Toast Notifications**: User feedback for form submissions and actions
4. **Image Handling**: File upload capabilities for smile analysis
5. **Component Library**: Radix UI components via shadcn/ui for accessibility

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express.js routes handle requests and validate data using Zod schemas
3. **Data Storage**: Currently using in-memory storage with interfaces designed for database integration
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query caches server state, React state for UI interactions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Fetch API with TanStack Query wrapper
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple (prepared for PostgreSQL sessions)

### Development Tools
- **Build Tool**: Vite with React plugin
- **Database Management**: Drizzle Kit for migrations
- **TypeScript**: Strict configuration with path mapping
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Environment
- **Vite Dev Server**: Fast HMR and development experience
- **Express Server**: Runs on Node.js with tsx for TypeScript execution
- **Environment Variables**: DATABASE_URL required for database connection
- **Windows Compatibility**: Added cross-env package and Windows-specific scripts

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server code to `dist/index.js`
- **Database**: Drizzle Kit handles schema migrations
- **Serving**: Express serves both API routes and static frontend files

### Windows Deployment
- **Scripts**: Created start-dev.bat, start-prod.bat, start-dev.ps1, start-prod.ps1
- **Cross-Platform**: Uses cross-env package for environment variable compatibility
- **Documentation**: Comprehensive README-Windows.md with multiple setup options
- **Package**: Alternative package-windows.json with corrected scripts

### Database Considerations
- **Current State**: Using in-memory storage with database interfaces
- **Production Ready**: Drizzle configuration points to PostgreSQL
- **Migration Strategy**: `npm run db:push` applies schema changes
- **Connection**: Requires DATABASE_URL environment variable

### Key Architectural Decisions
1. **Monorepo Structure**: Single repository with client, server, and shared code
2. **Type Safety**: End-to-end TypeScript with shared schema definitions
3. **Modern Stack**: React 18, Express.js, and PostgreSQL for scalability
4. **Component Architecture**: Reusable UI components with consistent styling
5. **API Design**: RESTful endpoints with proper error handling and validation