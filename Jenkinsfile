pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }

        stage('Build and package') {
            steps {
                script {
                    // 빌드를 위해 node 이미지를 사용하는 단계
                    docker.image('node:17.3.1').inside('-u node') {
                        // 작업 디렉토리 설정
                        dir('/app') {
                            // 의존성 설치
                            sh 'npm install'
                            // React 앱 빌드
                            sh 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Build image') {
            steps {
                script {
                    app = docker.build("minseo205/spotlight-konex-fe")
                }
            }
        }

        stage('Push image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }

        stage('Deploy') {
        	steps {
            	sshagent(credentials: ['nhn-key']) {
        			sh '''
        				ssh -o StrictHostKeyChecking=no ubuntu@10.2.1.37
                        ssh -tt ubuntu@10.2.1.37 sh ./deploy.sh
                    '''
        		}
        	}
        }
    }
}