

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cicd-app .'
            }
        }

        stage('Deploy Locally') {
            steps {
                bat '''
                docker rm -f cicd-container 2>NUL || echo No previous container
                docker run -d --restart unless-stopped -p 3002:5000 --name cicd-container cicd-app
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }
        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}
