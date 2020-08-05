pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                echo '==> Docker Build'
                sh 'sudo docker run hello-world'
                sh 'ls -a'
            }
        }
        stage('Docker Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}