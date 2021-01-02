import Home from "@/views/Home";
import Fav from "@/views/Fav";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/Fav",
        component: Fav
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;