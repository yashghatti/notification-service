
# notification-service 

Slack notification service for internal services
***

## Run/Debug 

Requires the following environment variables  

- GS_SLACK_TOKEN
- GS_SLACK_DIRECT_MESSAGE_ID

> npm start

## Build

	docker build -t notification-service --no-cache .
	docker rm $(docker ps -aqf "name=notification-service") -f
	docker run -p 1111:8080 -e GS_SLACK_TOKEN=$GS_SLACK_TOKEN -e GS_SLACK_DIRECT_MESSAGE_ID=$GS_SLACK_DIRECT_MESSAGE_ID --name notification-service --detach notification-service
    
## Usage

To notify self

    <URL>/slack/notify-self?text=<Notification Text>