# Quick Command Reference

## Normal Development Commands

### Setup
```bash
npm install                 # Install dependencies
```

### Development
```bash
npm run dev                 # Start development server (http://localhost:3000)
npm run build              # Build for production
npm start                  # Start production server
npm run lint               # Run ESLint
```

### Alternative Package Managers
```bash
yarn dev                   # Using Yarn
pnpm dev                   # Using PNPM
bun dev                    # Using Bun
```

## Docker Commands

### Development with Live Reload

#### Docker Compose (Recommended)
```bash
docker-compose -f docker-compose.dev.yml up              # Start dev server
docker-compose -f docker-compose.dev.yml up -d           # Start in background
docker-compose -f docker-compose.dev.yml up --build      # Rebuild and start
docker-compose -f docker-compose.dev.yml down            # Stop containers
docker-compose -f docker-compose.dev.yml logs -f         # View logs
docker-compose -f docker-compose.dev.yml restart         # Restart services
```

#### Direct Docker Commands
```bash
docker build -f Dockerfile.dev -t todo-app-dev .         # Build dev image
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules todo-app-dev  # Run with live reload
```

### Production Docker

```bash
docker build -t todo-app .                               # Build production image
docker run -d -p 3000:3000 --name todo-prod todo-app    # Run production container
docker stop todo-prod                                    # Stop container
docker rm todo-prod                                      # Remove container
```

### Docker Utility Commands

```bash
docker ps                                                # List running containers
docker ps -a                                            # List all containers
docker images                                           # List images
docker exec -it <container-name> sh                     # Shell into container
docker logs <container-name>                            # View container logs
docker system prune                                     # Clean up unused resources
```

### Cleanup Commands
```bash
docker-compose -f docker-compose.dev.yml down --volumes  # Remove containers and volumes
docker rmi todo-app-dev                                 # Remove dev image
docker rmi todo-app                                     # Remove prod image
```

## Port Management

```bash
npx kill-port 3000                                      # Kill process on port 3000
PORT=3001 npm run dev                                    # Run on different port
netstat -ano | findstr :3000                           # Check what's using port 3000 (Windows)
lsof -ti:3000                                          # Check what's using port 3000 (Mac/Linux)
```

## Troubleshooting

### Clear Dependencies
```bash
rm -rf node_modules package-lock.json                   # Remove dependencies
npm install                                             # Reinstall
```

### Docker Issues
```bash
docker system prune -a                                  # Clean all Docker resources
docker-compose -f docker-compose.dev.yml build --no-cache  # Rebuild without cache
```

### Permission Issues (Linux/Mac)
```bash
sudo chown -R $USER:$USER .                            # Fix file permissions
```

## Quick Start

### For Normal Development:
```bash
npm install && npm run dev
```

### For Docker Development:
```bash
docker-compose -f docker-compose.dev.yml up
```

### For Production:
```bash
npm run build && npm start
```

### For Docker Production:
```bash
docker build -t todo-app . && docker run -p 3000:3000 todo-app
```