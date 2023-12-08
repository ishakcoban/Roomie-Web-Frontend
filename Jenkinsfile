pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-id')
        IMAGE_NAME = 'ishakcbn/roomie-frontend'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = "roomie-frontend" 
    }

    stages {

        stage('Remove Previous Container and Image') {
            steps {
                script {
                    def containerExists = bat(script: "docker ps -a --filter name=roomie-frontend --format '{{.Names}}'", returnStatus: true).trim()
    
                    if (containerExists) {
                        // Container exists, proceed with stopping and removing
                        bat "docker stop roomie-frontend"
                        bat "docker rm roomie-frontend"
                        bat "docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true"
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', 'docker-hub-id') {
                        docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    docker.image("${IMAGE_NAME}:${IMAGE_TAG}").run("-p 4200:80 --name ${CONTAINER_NAME}")
                }
            }
        }

    }

    post {
        success {
            echo 'Pipeline successfully completed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
