# Nginx-Poc

## Business Goal

Was to have endpoints:
- `/api/*` - served by brh-backend go application
- `/api/pdf` - served by node.js sample app

## Concept/Idea

Idea was to deploy 2 docker container with backend apps (one in golang, one in node.js) and one container with that will expose uniform port and perform routing.

Nginx is a great candidate to be such container.

## Implementation

## Prerequisites
- brh-backend image
- Docker

### 1. Create Node.js application 
First you need to develop the node.js application. 

[node-app/app.js](node-app/)

### 2. Prepare Node.js application docker image
[node-app/Dockerfile](node-app/Dockerfile)

### 3. Prepare nginx conf
[nginx.conf](nfinx.conf)

### 4. Prepare docker-compose
[docker-compose.yml](docker-compose.yml)

### 5. Run docker-compose
In [.](.) run
```sh
docker-compose up -d
```

## Theory behind it
Paste this files to ChatGPT prompt xd
