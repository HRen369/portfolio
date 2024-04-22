import  {createMemoryHistory, createRouter} from "vue-router";

import HomeView from "./components/HomeView.vue"
import ProjectsView from "./components/projects/ProjectsView.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/projects', component: ProjectsView},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    // {path: '/tutorials', component: Tutorials}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router