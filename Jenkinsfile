pipeline {
  agent any
  stages {
    stage('ok') {
      steps {
        retry(count: 3) {
          error 'ok'
        }

      }
    }

  }
  environment {
    param = '1'
  }
}