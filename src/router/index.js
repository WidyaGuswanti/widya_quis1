import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Portofolio from "@/views/portofolio.vue";

const routes = [
    {
        path: "/",
        name: "my-profile",
        component: Home,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/portofolio",
        name: "Portofolio",
        component: Portofolio,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;