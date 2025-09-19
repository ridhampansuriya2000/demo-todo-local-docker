# Todo Task Application

A modern, responsive todo application built with Next.js 15, React 19, and Tailwind CSS. Features include task management with local storage persistence, filtering, and real-time updates.

## Features

- ✅ Add, edit, and delete tasks
- 🔍 Filter tasks (All, Active, Completed)
- 💾 Local storage persistence
- 📱 Responsive design
- ⚡ Real-time updates
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Storage**: Browser Local Storage
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Docker (optional)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/ridhampansuriya2000/demo-todo-local-docker.git
cd demo-todo-local-docker
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Docker Setup

### Development with Docker (Live Reload)

**Using Docker Compose (Recommended)**
```bash
# Start development server with live reload
docker-compose -f docker-compose.dev.yml up

# Run in background
docker-compose -f docker-compose.dev.yml up -d

# Stop containers
docker-compose -f docker-compose.dev.yml down
```

**Using Docker directly**
```bash
# Build development image
docker build -f Dockerfile.dev -t todo-app-dev .

# Run with live reload
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules todo-app-dev
```

### Production with Docker

```bash
# Build production image
docker build -t todo-app .

# Run production container
docker run -p 3000:3000 todo-app
```

## Available Scripts

### Normal Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Docker Commands

#### Development (Live Reload)
```bash
# Start with docker-compose
docker-compose -f docker-compose.dev.yml up

# Build and start
docker-compose -f docker-compose.dev.yml up --build

# Stop and remove containers
docker-compose -f docker-compose.dev.yml down

# View logs
docker-compose -f docker-compose.dev.yml logs -f
```

#### Production
```bash
# Build production image
docker build -t todo-app .

# Run production container
docker run -d -p 3000:3000 --name todo-app-prod todo-app

# Stop production container
docker stop todo-app-prod

# Remove production container
docker rm todo-app-prod
```

#### Utility Commands
```bash
# Remove all containers
docker-compose -f docker-compose.dev.yml down --volumes

# Rebuild without cache
docker-compose -f docker-compose.dev.yml build --no-cache

# Shell into running container
docker exec -it todo-app-dev sh
```

## Project Structure

```
todo-task-local/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── AddTask.jsx
│       ├── TaskFilter.jsx
│       ├── TaskItem.jsx
│       ├── TaskList.jsx
│       ├── todo-list.jsx
│       └── useTasks.js
├── public/
├── docker-compose.dev.yml
├── Dockerfile
├── Dockerfile.dev
├── COMMANDS.md
└── package.json
```

### Component Architecture

- **todo-list.jsx** - Main container component
- **AddTask.jsx** - Task input and add functionality
- **TaskFilter.jsx** - Filter buttons (All, Active, Completed)
- **TaskList.jsx** - Renders list of tasks
- **TaskItem.jsx** - Individual task with edit/delete/toggle
- **useTasks.js** - Custom hook for task state management

## Usage

1. **Add Task**: Enter task text and click "Add Task" or press Enter
2. **Edit Task**: Click "Edit" button, modify text, and save
3. **Complete Task**: Check the checkbox to mark as completed
4. **Delete Task**: Click "Delete" button (with confirmation)
5. **Filter Tasks**: Use filter buttons to view All, Active, or Completed tasks

## Development Notes

- Tasks are stored in browser's local storage
- Input validation allows alphanumeric characters, spaces, underscores, and hyphens
- Responsive design works on mobile and desktop
- Hot reload enabled in development mode

## Docker Live Reload

The development Docker setup includes:
- Volume mounting for live code changes
- Node modules optimization
- Hot reload functionality
- Development server with file watching

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**
```bash
# Kill process on port 3000
npx kill-port 3000
# or change port
PORT=3001 npm run dev
```

2. **Docker permission issues**
```bash
# On Linux/Mac, fix permissions
sudo chown -R $USER:$USER .
```

3. **Node modules issues**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

## License

This project is private and for demonstration purposes.