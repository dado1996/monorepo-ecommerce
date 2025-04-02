# Ecommerce TypeScript Monorepo

## Overview

This monorepo contains multiple TypeScript packages that work together to form a complete application. By organizing our codebase in a monorepo structure, we achieve better code sharing, simplified dependency management, and coordinated versioning across all packages.

## Table of Contents

- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Setup](#development-setup)
- [Package Documentation](#package-documentation)
  - [Core](#core)
  - [API](#api)
  - [Web](#web)
  - [Mobile](#mobile)
  - [Shared](#shared)
- [Development Workflow](#development-workflow)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
  - [Building](#building)
  - [Linting and Formatting](#linting-and-formatting)
- [Git Workflow](#git-workflow)
  - [Branch Naming Convention](#branch-naming-convention)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Request Process](#pull-request-process)
- [CI/CD](#cicd)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Project Structure

```
monorepo-ecommerce/
├── .github/                 # GitHub specific files (workflows, templates)
├── .vscode/                 # VS Code settings for the project
├── packages/                # All packages live here
│   ├── core/                # Core business logic and domain models
│   ├── api/                 # Backend API service
│   ├── web/                 # Web client application
│   ├── mobile/              # Mobile client application
│   └── shared/              # Shared utilities and types used across packages
├── tools/                   # Build scripts and development tools
├── config/                  # Shared configuration files
├── docs/                    # Documentation files
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── jest.config.js           # Jest configuration for testing
├── lerna.json               # Lerna configuration for monorepo management
├── nx.json                  # Nx configuration for monorepo tooling
├── tsconfig.json            # Base TypeScript configuration
├── package.json             # Root package.json for workspace dependencies
└── README.md                # This file
```

## Technology Stack

- **Package Management**: [pnpm](https://pnpm.io/) with workspaces
- **Monorepo Tools**: [Nx](https://nx.dev/) and/or [Lerna](https://lerna.js.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.x)
- **Backend Framework**: [NestJS](https://nestjs.com/)
- **Frontend Framework**: [React](https://reactjs.org/) with [Next.js](https://nextjs.org/)
- **Mobile**: [React Native](https://reactnative.dev/)
- **API Communication**: [GraphQL](https://graphql.org/) with [Apollo](https://www.apollographql.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
- **Testing**: [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) or [Zustand](https://github.com/pmndrs/zustand)
- **CI/CD**: GitHub Actions
- **Containerization**: Docker and Docker Compose
- **Deployment**: Kubernetes / AWS / Google Cloud Platform / Azure

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [pnpm](https://pnpm.io/) (v8.x or later)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (for local development with databases and services)
- [Git](https://git-scm.com/) (v2.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dado1996/monorepo-ecommerce.git
   cd monorepo-ecommerce
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your local configuration values.

### Development Setup

1. Initialize the development database:

   ```bash
   docker-compose up -d db
   pnpm db:migrate
   pnpm db:seed
   ```

2. Generate GraphQL types (if applicable):

   ```bash
   pnpm codegen
   ```

3. Start the development services:
   ```bash
   pnpm dev
   ```

## Package Documentation

### Core

The `core` package contains the essential business logic, domain models, and services that are shared across the application. It has minimal dependencies on external frameworks to maintain high portability.

**Key Features:**

- Domain models and entity definitions
- Business logic and validation rules
- Service interfaces and implementations
- Error handling and custom error types

**Usage:**

```typescript
import { UserService } from "@project/core";

// Create an instance of the service
const userService = new UserService();

// Use the service to perform operations
const user = await userService.findById("user-123");
```

### API

The `api` package implements the backend API service using NestJS. It exposes both REST and GraphQL endpoints for clients to interact with the system.

**Key Features:**

- API controllers and resolvers
- Authentication and authorization middleware
- Request validation and error handling
- Database interactions via Prisma
- Logging and monitoring

**Running the API:**

```bash
cd packages/api
pnpm dev
```

**API Documentation:**
Once running, access the Swagger documentation at http://localhost:3001/docs

### Web

The `web` package contains the web client application built with React and Next.js.

**Key Features:**

- Server-side rendered pages
- Client-side state management
- Form handling and validation
- Responsive UI components
- Internationalization support

**Running the Web App:**

```bash
cd packages/web
pnpm dev
```

The web application will be available at http://localhost:3000

### Mobile

The `mobile` package contains the mobile application built with React Native.

**Key Features:**

- Cross-platform UI components
- Navigation system
- Device-specific adaptations
- Offline support
- Push notification handling

**Running the Mobile App:**

```bash
cd packages/mobile
pnpm start
```

Follow the instructions in the Metro bundler to run on iOS or Android.

### Shared

The `shared` package contains utilities, types, and helper functions that are used across multiple packages.

**Key Features:**

- Common TypeScript interfaces and types
- Utility functions
- Constants and configuration
- Shared React components
- Test helpers

**Usage:**

```typescript
import { formatDate, Logger } from "@project/shared";

const formattedDate = formatDate(new Date(), "yyyy-MM-dd");
Logger.info("Date formatted:", formattedDate);
```

## Development Workflow

### Running Locally

To start all services in development mode:

```bash
pnpm dev
```

To start individual packages:

```bash
pnpm dev --scope=@project/api  # Start only the API
pnpm dev --scope=@project/web  # Start only the web app
```

### Testing

Run all tests across all packages:

```bash
pnpm test
```

Run tests for a specific package:

```bash
pnpm test --scope=@project/core
```

Run tests in watch mode during development:

```bash
pnpm test:watch --scope=@project/web
```

### Building

Build all packages:

```bash
pnpm build
```

Build a specific package:

```bash
pnpm build --scope=@project/api
```

### Linting and Formatting

Lint all files:

```bash
pnpm lint
```

Fix linting issues automatically:

```bash
pnpm lint:fix
```

Format code with Prettier:

```bash
pnpm format
```

## Git Workflow

### Branch Naming Convention

- `feature/XXX-description` - For new features
- `bugfix/XXX-description` - For bug fixes
- `hotfix/XXX-description` - For urgent production fixes
- `chore/XXX-description` - For maintenance tasks
- `docs/XXX-description` - For documentation updates

Where `XXX` is the issue/ticket number if applicable.

### Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Examples:

- `feat(api): add user authentication endpoints`
- `fix(web): resolve issue with form submission`
- `docs(readme): update installation instructions`
- `chore(deps): update dependency versions`

### Pull Request Process

1. Create a branch from `main` using the naming convention above
2. Make your changes and commit using conventional commit format
3. Push your branch and create a pull request
4. Ensure the CI pipeline passes
5. Request review from at least one team member
6. Address any feedback or comments
7. Once approved, the PR can be merged

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

- Running tests
- Linting code
- Building packages
- Deploying to staging/production environments

See the workflow definitions in the `.github/workflows` directory for details.

## Deployment

### Staging

Deployments to the staging environment happen automatically when changes are merged to the `main` branch.

Staging URLs:

- API: https://api-staging.project.com
- Web: https://staging.project.com

### Production

Deployments to production are triggered manually through GitHub Actions or by creating a release tag.

Production URLs:

- API: https://api.project.com
- Web: https://project.com

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Troubleshooting

Common issues and their solutions:

### Build Errors

**Issue**: TypeScript compilation errors
**Solution**: Ensure you're using the correct TypeScript version (`pnpm add -D typescript@5.x`) and check your `tsconfig.json` settings.

**Issue**: Package dependency issues
**Solution**: Try removing `node_modules` and reinstalling with `pnpm install --force`.

### Development Environment

**Issue**: Hot reloading not working
**Solution**: Check that file watchers are working correctly and that you don't have too many files being watched (adjust your OS limits if needed).

**Issue**: API not connecting to database
**Solution**: Ensure your Docker containers are running (`docker-compose ps`) and check the database connection strings in your `.env` file.

For more troubleshooting help, please check the [project wiki](https://github.com/your-organization/project-name/wiki/Troubleshooting) or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
