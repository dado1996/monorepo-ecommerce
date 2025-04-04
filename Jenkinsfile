// Jenkinsfile
pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-v /var/jenkins_home/.aws:/root/.aws:ro'
        }
    }
    
    environment {
        AWS_REGION = 'us-east-1'
        S3_BUCKET = 'monorepo-ecommerce'
        REACT_APP_VERSION = "1.0.${BUILD_NUMBER}"
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to S3') {
            steps {
                // Install AWS CLI
                sh 'apk add --no-cache aws-cli'
                
                // Upload build directory to S3
                sh 'aws s3 sync build/ s3://$S3_BUCKET/ --delete --region $AWS_REGION'
                
            }
        }
    }
    
    post {
        success {
            echo "Application deployed successfully to https://${S3_BUCKET}.s3-website-${AWS_REGION}.amazonaws.com"
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}