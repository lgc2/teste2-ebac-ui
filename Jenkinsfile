pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/lgc2/teste2-ebac-ui.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}