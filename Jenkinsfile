pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-id')
        IMAGE_NAME = 'ishakcbn/roomie-frontend'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = "roomie-frontend" 
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
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

        stage('Remove Previous Container and Image') {
            steps {
                script {
                    // Check if the container exists and remove it
                    bat "docker stop ${CONTAINER_NAME} || true"
                    bat "docker rm ${CONTAINER_NAME} || true"

                    // Check if the image exists and remove it
                    bat "docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true"
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
