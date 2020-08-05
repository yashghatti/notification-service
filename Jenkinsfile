pipeline {
    agent any

    environment {
        GS_SLACK_TOKEN              = credentials('GS_SLACK_TOKEN')
        GS_SLACK_DIRECT_MESSAGE_ID  = credentials('GS_SLACK_DIRECT_MESSAGE_ID')
    }

    stages {
        stage('Docker Build') {
            steps {
                echo '==> Docker Build'
                sh 'sudo docker build -t notification-service --no-cache .'
            }
        }
        stage('Docker Stop Existing') {
            steps {
                echo '==> Docker Stop Existing'
                sh 'sudo docker rm $(docker ps -aqf "name=notification-service") -f'
            }
        }
    }
}