<script setup>
import { defineProps } from 'vue';
const props = defineProps(['projects'])
</script>

<template>
    <div class="cards-content" v-for="project of props.projects">
        <a target="_blank" class="links" :href="project.link">
            <div class="card">
                <p class="card-name">{{ project.name }}</p>
                <p  class="card-status" v-if="project.status===false">Incomplete</p>
                <p  class="card-status" v-else>Complete</p>
            </div>
        </a>
    </div>
</template>

<style>
.cards-content{
    display: flex;
}


.links{
    text-decoration: none;
}

.card {
    margin-left: 1em;
    margin-top: 1em;
    background-color: #0b0d18;
    padding: 1em;
    height: 6em;
    width:8em;
    border-radius: 5px;
}

.card-name{
    margin: 0;
    color:#B6BBC4;
    font-size: large;
    font-weight: bold;
}

.card-status{
    color:#B6BBC4;
    font-size: small;
    font-weight: bold;
}

</style>