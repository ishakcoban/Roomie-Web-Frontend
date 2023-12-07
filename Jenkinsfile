pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Build the Docker image
                script {
                    dockerImage = docker.build('ishakcbn/roomie-frontend:latest')
                }
            }
        }

        /*stage('Test') {
            steps {
                // Run your tests if needed
            }
        }*/

        stage('Deploy') {
            steps {
                // Deploy the Docker container
                script {
                    docker.withRegistry('https://hub.docker.com', 'dockerhub-id') {
                        dockerImage.push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
    }
}
