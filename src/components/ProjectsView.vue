<script setup>
</script>

<template>
    <h1 class="title">Projects</h1>
    <hr/>
    <div class="project-nav">
        <h3>Beginner</h3>
        <h3>Intermediate</h3>
        <h3>Advanced</h3>
    </div>
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