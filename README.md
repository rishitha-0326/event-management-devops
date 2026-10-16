# Event Management & Registration System — DevOps Case Study

## 1. Application
A simple web application for viewing upcoming events and registering for them.

Features:
- Search events
- View event details
- Register for an event
- Store registrations in browser LocalStorage
- Cancel registrations

## 2. Technologies
- HTML, CSS, JavaScript
- Git/GitHub
- Docker
- Jenkins
- Docker Hub
- Docker Compose YAML
- Nginx

## 3. Run locally without Docker
Open `index.html` in a browser.

## 4. Run with Docker
Build:
```bash
docker build -t event-management .
```

Run:
```bash
docker run -d --name event-management-app -p 8080:80 event-management
```

Open:
http://localhost:8080

Check:
```bash
docker ps
```

## 5. Run with Docker Compose
```bash
docker compose up -d --build
```

Open:
http://localhost:8080

Stop:
```bash
docker compose down
```

## 6. GitHub
Create a repository named:
`event-management-devops`

Then:
```bash
git init
git add .
git commit -m "Initial Event Management application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 7. Jenkins
Jenkins requirements:
- Docker installed on the Jenkins machine/agent
- Git installed
- Docker Hub credentials stored in Jenkins as:
  - ID: `dockerhub-creds`
  - Username: Docker Hub username
  - Password: Docker Hub access token

Before running Jenkins, edit the `IMAGE_NAME` in Jenkinsfile:
`YOUR_DOCKERHUB_USERNAME/event-management`

Create a Pipeline job and connect it to the GitHub repository. Set the Jenkinsfile path to `Jenkinsfile`.

Pipeline:
Git Checkout → Docker Build → Docker Push → Deploy

## 8. One-minute video flow
1. Show the running Event Management application.
2. Show the GitHub repository and files.
3. Open Dockerfile.
4. Open Jenkinsfile.
5. Show docker-compose.yml.
6. Show Jenkins successful pipeline.
7. Show Docker image/container.
8. Open `http://localhost:8080` and register for an event.

## Short explanation
"This case study demonstrates the DevOps lifecycle for an Event Management and Registration System. The application source code is maintained in GitHub. Jenkins automates the CI/CD pipeline by checking out the code, building a Docker image, pushing it to Docker Hub, and deploying the container. Docker Compose provides YAML-based configuration. Finally, the application is exposed on port 8080 and accessed through the browser."
