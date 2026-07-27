# TaskFlow

TaskFlow is a project and activity management platform designed to help teams and individuals organize tasks, track progress, and improve productivity.

The goal of the project is to provide a simple and flexible workspace where users can create projects, manage activities, organize workflows, and collaborate efficiently.

## Features

- Project management
- Activity/task organization
- Kanban-style boards
- Task status tracking
- User collaboration
- Notifications and reminders
- Cross-platform support

## Project Structure

```
TaskFlow/
│
├── backend/   # API and server-side application
├── frontend/  # Web application
├── mobile/    # Mobile application
└── desktop/   # Desktop application
```

## Technologies

The project is being developed using modern technologies, including:

- Backend: Node.js / Express / Sequelize
- Frontend: React / TypeScript / Vite
- Mobile: React Native / Expo
- Desktop: C# / .NET / WinForms
- Database: MySQL

## Getting Started

Each application has its own setup instructions:

- Backend: `backend/README.md`
- Frontend: `frontend/README.md`
- Mobile: `mobile/README.md`
- Desktop: `desktop/README.md`

## Running with Docker

The `backend` and `frontend` can be run together with Docker Compose, along with a MySQL database.

> Mobile and desktop apps are not included in the Docker setup — they run on a device/simulator, not as containers.

### Prerequisites

- Docker Desktop installed and running

### Configure

Copy the root `.env.example` to `.env` and adjust the credentials if you don't want the defaults:

```bash
cp .env.example .env
```

### Start

```bash
docker compose up --build
```

### Ports

| Service  | URL                     | Port |
|----------|-------------------------|------|
| Frontend | http://localhost:5173   | 5173 |
| Backend  | http://localhost:3000   | 3000 |
| MySQL    | localhost:3306          | 3306 |

### Stop

```bash
docker compose down
```

To also remove the database volume (wipes stored data):

```bash
docker compose down -v
```

## License

This project is licensed under the terms described in the [LICENSE](./LICENSE) file.
