pipeline {
    agent any

    environment {
        IMAGE_NAME = "rishitha1235/event-management"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%BUILD_NUMBER% .'
                bat 'docker tag %IMAGE_NAME%:%BUILD_NUMBER% %IMAGE_NAME%:latest'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat 'docker login -u "%DOCKER_USER%" -p "%DOCKER_PASS%"'
                    bat 'docker push %IMAGE_NAME%:%BUILD_NUMBER%'
                    bat 'docker push %IMAGE_NAME%:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker rm -f event-management-app || exit /b 0'
                bat 'docker run -d --name event-management-app -p 8080:80 %IMAGE_NAME%:latest'
            }
        }
    }

    post {
        success {
            echo 'Event Management application deployed successfully on port 8080.'
        }
    }
}
