pipeline {
    agent any

    stages {
        stage('Test Docker and Kubernetes') {
            steps {
                bat 'docker --version'
                bat 'kubectl version --client'
                bat 'kubectl get nodes'
            }
        }
    }
}
