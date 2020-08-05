pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                echo '==> Docker Build'
                sh 'ls -a'
                sh 'docker build -t notification-service --no-cache .'
            }
        }
        stage('Docker Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}