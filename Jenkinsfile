// Jenkinsfile
pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'
        S3_BUCKET = 'monorepo-ecommerce--use1-az4--x-s3'
        REACT_APP_VERSION = "1.0.${BUILD_NUMBER}"
        CLOUDFRONT_ID = 'E1SDMLKFSMKDMLK'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to S3') {
            steps {
                withAWS(region: "${AWS_REGION}", credentials: 'aws-credentials') {
                    s3Upload(bucket: "${S3_BUCKET}", path: '/', workingDir: 'build', includePathPattern: '**/*')
                    cfInvalidate(distribution: "${CLOUDFRONT_ID}", paths: ['/*'])
                }
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