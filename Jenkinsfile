#!/usr/bin/groovy 

node {
    stage "Prep env"
        checkout scm

        docker.image('node').inside {
            stage "stage 1 - install deps"
                sh "npm install"
            
            stage "stage 2 - test"
                sh "npm test"
        }
}