
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
                bat 'docker build -t ci-cd-app .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests'
                bat 'docker run --rm ci-cd-app python -m pytest -q'
            }
        }

        stage('Deploy Locally') {
            steps {
                echo 'Deploying the application'
                bat 'docker rm -f ci-cd-app-container 2>nul || exit /b 0'
                bat 'docker run -d --name ci-cd-app-container -p 5000:5000 ci-cd-app'
            }
        }
    }
}
