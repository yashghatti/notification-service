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
                sh 'sudo podman build -t notification-service --no-cache .'
            }
        }
        stage('Docker Stop Container') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    echo '==> Stopping container'
                    sh 'sudo podman rm $(sudo podman ps -aqf "name=notification-service") -f'
                }    
            }
        }
        stage('Docker Run Container') {
            steps {
                sh 'sudo podman run -p 1111:8080 -e GS_SLACK_TOKEN=$GS_SLACK_TOKEN -e GS_SLACK_DIRECT_MESSAGE_ID=$GS_SLACK_DIRECT_MESSAGE_ID --name notification-service --network=bridged --detach notification-service'
            }
        }    
    }
}
