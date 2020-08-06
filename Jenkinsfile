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
        stage('Docker Stop Container') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    echo '==> Stoppoing container'
                    sh 'sudo docker rm $(sudo docker ps -aqf "name=notification-service") -f'
                }    
            }
        }
    }
}