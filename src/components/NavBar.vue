<script setup>
import { RouterLink } from 'vue-router';

const links = [
    {
        "name":"Projects",
        "link":"/projects"
    },
    // {
    //     "name":"Tutorials",
    //     "link":"./tutorials.html"
    // },
    // {
    //     "name":"Contact Me",
    //     "link":"/contact"
    // },
    // {
    //     "name":"About Me",
    //     "link":"/aboutMe"
    // }
]

</script>

<template>
    <div class="nav-bar">
        <div class="nav-bar-left">
            <RouterLink class="nav-bar-link home-link" to="/">Humberto Rendon</RouterLink>
        </div>

        <div class="nav-bar-right">
            <a class="nav-bar-link" target="_blank" href="/resume/Resume_Humberto_Rendon.pdf">Resume</a>
            <template  v-for="item of links">
                <RouterLink class="nav-bar-link" :to=item.link>{{ item.name }}</RouterLink>
            </template>
        </div>

    </div>
</template>

<style>

.home-link{
    margin-left: 1em;
    margin-top: 0.85em;
    font-size: 1.2em;
}


.nav-bar-link{
    text-decoration: none;
    color:#B6BBC4;
}

.nav-bar{
    display: flex;
    background-color: #31304D;
    height: 5em;
    color: #B6BBC4;
}

.nav-bar-left{
    display: flex;
}

.nav-bar-right{
    display: flex;
    position: absolute;
    right: 0;
    margin-right: 1em;
}

.nav-bar-right a{
    background-color: #161A30;
    padding: 0.5em;
    margin-left: 1em;
    margin-top: 0.5em;
    border-radius: 5px;
    box-shadow: 0.5px 0.5px;
}

.nav-bar-right a:hover{
    background-color: #0b0d18;
}



</style>