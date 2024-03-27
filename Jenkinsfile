pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/LingarajPrasad/frontend.git'
            }
        }
        stage('build and push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub') {
                        sh "docker build -t lingarajprasad/clientapp:${env.BUILD_NUMBER} ."
                        sh "docker push lingarajprasad/clientapp:${env.BUILD_NUMBER}"
                    }
                }
            }
        }
        stage('run') {
            steps {
                script {
                    sh "docker pull lingarajprasad/clientapp:${env.BUILD_NUMBER}"
                    sh "docker rm -f frontend"
                    sh "docker run -d -p 3000:3000 --name frontend lingarajprasad/clientapp:${env.BUILD_NUMBER}"
                }
            }
        }
    }
}