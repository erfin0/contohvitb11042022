import { createRouter, createWebHistory } from "vue-router";
import E404Vue from "./view/page/E404.vue";
import ShopVue from "./view/page/user/Shop.vue";
import AdminVue from "./layout/Admin.vue";
import DashboardVue from "./view/page/admin/Dashboard.vue";
import ProductsVue from "./view/page/admin/Products.vue";
import OrdersVue from "./view/page/admin/Orders.vue";
import UserVue from "./layout/User.vue";
import CheckoutVue from "./view/page/user/Checkout.vue"
import produkVue from "./components/user/Produk.vue";
import  login from "./view/auth/Login.vue";
import Auth from "./layout/Auth.vue";

const routes = [
    {   path: "/admin",
        component: AdminVue,
        name: 'admin',
        redirect: "/dashboard",
        children: [{
                path: "/dashboard",
                component: DashboardVue,
                name: 'admin.Dashboard'
            },
            {
                path: "/dashboard/products",
                component: ProductsVue,
                name: 'admin.Products'
            },
            {
                path: "/dashboard/orders",
                component: OrdersVue,
                name: 'admin.Orders'
            },

        ],
    },
    {   
        redirect: "/login",
        component: UserVue,
        children: [{
            path: "/shop",
            component: ShopVue,
            name: 'user.shop'
        }, {
            path: "/checkout",
            component: CheckoutVue,
            name: 'user.checkout'
        }, {
            path: "/produk/:slk",
            component: produkVue
        }, ]
    },
    
    {
        path: "/login",
        name: 'login',
        component: login
    },

    {
        path: "/:pathMatch(.*)*",
        component: E404Vue
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;