import { createRouter, createWebHistory } from 'vue-router'
// createWebHistory
// import CompaniesIndex from '../components/companies/CompaniesIndex.vue'


function setComponent(path_file) {
    const route_path = "./components/backend/pages/" + path_file + "Component.vue";
    return import("" + route_path);
}
const routes = [
    {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => setComponent("error/404") },
    { path: "/unauthorized/user", component: () => setComponent("error/401"),name: "unauthorized" },
    {
        path: "/",
        redirect: { path: '/home/dashboard' }
    },
    {
        path: "/home/dashboard", component: () => setComponent("dashboard/Home"), name: "Dashboard",
        meta: { permissions: "dashboard-view" }
    },

    // {
    //     path: "/users", component: () => setComponent("user/Users"), name: "Users",
    //     meta: { permissions: "users-view" }
    // },
    // {
    //     path: "/container/receives", component: () => setComponent("receive/Receives"), name: "Users",
    //     meta: { permissions: "receives-view" }
    // },



];


export default createRouter({
    history: createWebHistory(),
    routes
})
