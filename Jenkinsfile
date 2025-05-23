// Jenkinsfile
pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'
        S3_BUCKET = 'monorepo-ecommerce'
        CLOUDFRONT_ID = 'E8RDRUDHG6YXH'
        VITE_COUNTRIES_API = 'https://restcountries.com/v3.1/'
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
                    s3Upload(bucket: "${S3_BUCKET}", path: 'monorepo', workingDir: 'packages/ecommerce-view/dist', includePathPattern: '**/*')
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