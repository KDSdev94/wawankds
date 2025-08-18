# Portfolio Application

## Overview

This is a full-stack personal portfolio application built with React and Express.js. The application showcases a developer's professional experience, skills, education, and projects through a modern, responsive web interface. It features a sidebar navigation system with smooth scrolling between sections, mobile-responsive design, and a clean aesthetic using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Architecture Pattern**: RESTful API design with modular route organization
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Development Setup**: Vite integration for hot module replacement in development

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **User Model**: Basic user entity with username/password authentication structure

### UI Component System
- **Design System**: shadcn/ui with New York style variant
- **Component Library**: Comprehensive set of accessible components including forms, navigation, modals, and data display
- **Responsive Design**: Mobile-first approach with dedicated mobile navigation header
- **Theming**: CSS custom properties for consistent color scheme and typography

### Development Tooling
- **Package Manager**: npm with lock file for dependency consistency
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports
- **Build Process**: Separate client and server build processes with esbuild for server bundling
- **Development Server**: Integrated Vite dev server with Express for full-stack development

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connectivity
- **drizzle-orm** and **drizzle-zod**: Type-safe ORM with Zod integration for schema validation
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **wouter**: Minimalist routing library for React

### UI and Styling
- **@radix-ui**: Complete set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Utility for creating component variants
- **lucide-react**: Icon library with consistent design language

### Development Tools
- **vite**: Next-generation frontend build tool for fast development
- **tsx**: TypeScript execution environment for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for better debugging
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancement

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolver for various schema libraries
- **zod**: TypeScript-first schema validation library

The application follows modern web development best practices with a focus on type safety, developer experience, and user interface quality. The modular architecture allows for easy expansion of features while maintaining clean separation of concerns between frontend presentation, backend logic, and data persistence layers.