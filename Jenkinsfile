pipeline {
    agent any


    environment {
        // Define a variable to store the image name
        DOCKER_IMAGE_NAME = "ishakcbn/roomie-frontend:latest"
        CONTAINER_NAME = "roomie-frontend"
    }

    stages {
            stage('Login') {
      steps {
       script {

       
           withCredentials(credentialsId: 'docker-hub-id') {
             // bat "echo "%DOCKER_PASSWORD%" | docker login --username "%DOCKER_USERNAME%" --password-stdin"
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

        /*stage('Test') {
            steps {
                // Run your tests if needed
            }
        }*/
    }

    post {
        success {
            echo 'Deployment successful!'
        }
    }
}

