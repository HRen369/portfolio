<script setup>
import { ref } from 'vue';
import ProjectCards from "./ProjectCards.vue";
import { htmlCssJsProjects, pythonProjects,goProjects,advancedProjects } from './ProjectsData';

const projects = ref(htmlCssJsProjects);

function changeProjectContents(num){
    switch(num){
        case 0:
            projects.value = htmlCssJsProjects
            break;
        case 1:
            projects.value = pythonProjects
            break;
        case 2:
            projects.value = goProjects
            break;
        case 3:
            projects.value = advancedProjects;
            break;
    }
}

</script>

<template>
    <h1 class="title">Projects</h1>
    <hr/>
    <div class="project-nav">
        <h3 @click="changeProjectContents(0)">HTML/CSS/JS</h3>
        <h3 @click="changeProjectContents(1)">Python</h3>
        <h3 @click="changeProjectContents(2)">Go</h3>
        <h3 @click="changeProjectContents(3)">Advanced Projects</h3>
    </div>
    <ProjectCards :projects="projects"/>

</template>

<style>
    .project-nav{
        margin: 0;
        display: flex;
    }
    
    .project-nav h3{
        background-color: #31304D;
        padding: 0.5em;
        margin-left: 1em;
        margin-top: 0.5em;
        border-radius: 5px;
        box-shadow: 0.5px 0.5px;
    }

    .project-nav h3:hover{
    background-color: #100f1b;
    cursor: pointer;
}


</style>