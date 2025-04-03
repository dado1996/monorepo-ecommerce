pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
    }

    stages {
        stage('Verify code') {
            steps {
                git branch: 'main', url: 'https://github.com/dado1996/monorepo-ecommerce'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build the project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                withAWS(credentials: 'aws-credentials-id', region: "${AWS_REGION}")
            }
        }
    }

    post {
        success {
            echo "Deployment has been a success"
        }
        failure {
            echo "There was an error"
        }
    }
}