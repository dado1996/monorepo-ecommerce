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
├── packages/                # All packages live here
│   ├── common/              # Here are reusable functions for the main frontend view
│   ├── ecommerce-view/      # This is the main web application made in react
├── .gitignore               # Ignore certain files for versioning
├── Jenkinsfile              # Setup the pipeline for Jenkins
├── vitest.workspace.js      # Setup vitests workspaces
├── tsconfig.json            # Base TypeScript configuration
├── package.json             # Root package.json for workspace dependencies
└── README.md                # This file
```

## Technology Stack

- **Package Management**: [npm](https://npmjs.com/) with workspaces
- **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.x)
- **Frontend Framework**: [React](https://reactjs.org/)
- **Database**: [LocalStorage] Local Storage
- **Testing**: [Vitest](https://vitest.dev)
- **Styling**: [React Bootstrap](https://react-bootstrap.netlify.app)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **CI/CD**: Jenkins
- **Deployment**: AWS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://npmjs.com/) (v8.x or later) or any other node.js package manager
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

1. Start the development services:
   ```bash
   npm run dev
   ```

## Package Documentation

### Common

The `common` package contains reusable functions like price management and local storage to handle repeated context usage

**Key Features:**

- Domain models and entity definitions
- Business logic and validation rules
- Service interfaces and implementations
- Error handling and custom error types

**Usage:**

```typescript
import { priceManagement } from "common/priceManagement";

// Use the service to perform operations
const price = priceManagement("1234");
```

### Ecommerce View

The `ecommerce-view` package contains the client application that is seen

**Key Features:**

- Routes implemented with react-router
- Status management with Zustand
- Styling and desing with React Bootstrap
- Responsive data with cache'd information
- Logging and monitoring

## Development Workflow

### Running Locally

To start all services in development mode:

```bash
npm run dev
```

### Testing

Run all tests across all packages:

```bash
npm run test
```

Run tests for a specific package:

```bash
npm run test --workspace=common
```

### Building

Build all packages:

```bash
npm run build
```

Build a specific package:

```bash
npm run build --workspace=common
```

### Linting and Formatting

Lint all files:

```bash
npm run lint
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

This project uses Jenkins for continuous integration and deployment. The pipeline includes:

- Running tests
- Linting code
- Building packages
- Deploying to staging/production environments

# Decisions

The project was build as a workspace to manage the external functionalities properly, that could be instanciated from a third party library which would make it more readable and easy to test and debug

Inside the Ecommerce web application, it was used a standard vite create project configuration since it is easier and better to handle the files. It was used `vitest.config.ts` file to manage testing and ensure the test were consistent upon running. Then we have the `.editorconfig` to maintain consistency and organization across different local environments

Inside the public folder, it was stored the mock of the products to load in the app, for an easier and more convient loading

We separated the app in different concerns like components, hooks, interfaces, pages, services and templates, where each folder represent an important aspect of the appplication

First we have the components, where we store main reusable components
Hooks to save reusable custom hooks
Interfaces to manage declarations of the different objects and functions
Pages, where we save the main pages of the application.
Services are where the fetching services are stored
Templates is where we save the layout templates of the web application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
