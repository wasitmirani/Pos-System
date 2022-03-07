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
        path: "/products", component: () => setComponent("product/Products"), name: "Products",
        meta: { permissions: "products-view" }
    },
    {
        path: "/tables", component: () => setComponent("table/Tables"), name: "Users",
        meta: { permissions: "tables-view" }
    },
    {
        path: "/pos-system", component: () => setComponent("pos/Pos"), name: "Pos",
        meta: { permissions: "pos-view" }
    },
    {
        path: "/daily-orders", component: () => setComponent("order/DailyOrders"), name: "daily-orders",
        meta: { permissions: "daily-orders-view" }
    },
    {
        path: "/daily-sales", component: () => setComponent("report/DailySales"), name: "daily-sales",
        meta: { permissions: "daily-sales-view" }
    },
    {
        path: "/monthly-sales", component: () => setComponent("report/MonthlySales"), name: "monthly-sales",
        meta: { permissions: "monthly-sales-view" }
    },
    {
        path: "/cooking-orders", component: () => setComponent("order/CookingOrders"), name: "cooking-orders",
        meta: { permissions: "cooking-orders-view" }
    },
    {
        path: "/orders", component: () => setComponent("order/Orders"), name: "orders",
        meta: { permissions: "orders-view" }
    },
    {
        path: "/profile", component: () => setComponent("profile/Profile"), name: "profile",
        meta: { permissions: "profile-view" }
    },



];


export default createRouter({
    history: createWebHistory(),
    routes
})
