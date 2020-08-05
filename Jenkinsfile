pipeline {
    agent any

    stages {
        stage('Docker Build') {
            steps {
                echo '==> Docker Build'
                sh 'sudo docker run hello-world'
            }
        }
        stage('Docker Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}