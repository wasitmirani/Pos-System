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
    redirect: { path: '/not-found' }
    // component: () => setComponent("error/404")

},
{ path: "/not-found", component: () => setComponent("error/404"),name: "notfound" },
    { path: "/unauthorized/user", component: () => setComponent("error/401"),name: "unauthorized" },
    {
        path: "/",
        redirect: { path: '/home/dashboard' }
    },
    {
        path: "/home/dashboard", component: () => setComponent("dashboard/Home"), name: "Dashboard",
        meta: { permissions: "dashboard-view" }
    },

    {
        path: "/categories", component: () => setComponent("category/Categories"), name: "Categories",
        meta: { permissions: "categories-view" }
    },
    {
        path: "/products", component: () => setComponent("product/Products"), name: "Users",
        meta: { permissions: "products-view" }
    },



];


export default createRouter({
    history: createWebHistory(),
    routes
})
