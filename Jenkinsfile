/*pipeline {
    agent any

    environment {

        DOCKER_IMAGE_NAME = "ishakcbn/roomie-frontend:latest"
        CONTAINER_NAME = "roomie-frontend"
    }

    stages {
            stage('Login') {
      steps {
       script {

       
                    docker.withRegistry('', 'docker-hub-id') {
                        // Your build and push steps here
                        echo "login successfull!"
                    }

          }
      }
    }
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                checkout scm
            }
        }


        stage('Build and Deploy') {
            steps {
                script {
                    // Build Docker image
                    def dockerImage = docker.build(env.DOCKER_IMAGE_NAME)

                    // Run Docker container
                    def containerId = docker.image(env.DOCKER_IMAGE_NAME).run('-p 4200:80', "--name ${env.CONTAINER_NAME}")

                    // Store container image name for later use
                    env.CONTAINER_IMAGE_NAME = env.DOCKER_IMAGE_NAME

                    echo "Container ID: ${containerId}"
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    // Run the Docker container
                    docker.image("${IMAGE_NAME}:${IMAGE_TAG}").run("-p 4200:80 --name ${CONTAINER_NAME}")
                }
            }
        }

    }


}


*/



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
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    // Check if the image exists and remove it
                    sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG} || true"
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
