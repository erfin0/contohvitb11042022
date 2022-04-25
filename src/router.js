import { createRouter, createWebHistory } from "vue-router";
import E404Vue from "./view/page/E404.vue";
import HomeVue from "./view/page/user/Home.vue";
import AdminVue from "./layout/Admin.vue";
import DashboardVue from "./view/page/admin/Dashboard.vue";
import ProductsVue from "./view/page/admin/Products.vue";
import OrdersVue from "./view/page/admin/Orders.vue";
import UserVue from "./layout/User.vue";
import CheckoutVue from "./view/page/user/Checkout.vue"
import produkVue from "./components/user/Produk.vue";
import login from "./view/auth/Login.vue";
import register from "./view/auth/Register.vue";
import ShopVue from "./view/page/user/Shop.vue";
import teammember from "./view/page/admin/Teammember.vue";
import logistic from "./view/page/admin/Logistics.vue";


const routes = [{
        path: "/admin",
        component: AdminVue,
        name: 'admin',
        redirect: "/dashboard",
        children: [{
                path: "/dashboard",
                component: DashboardVue,
                name: 'admin.Dashboard'
            },
            {
<<<<<<< HEAD
=======
                path: "/dashboard/logistic",
                component: logistics,
                name: 'admin.Logistic'
            },
            {
>>>>>>> 9542a70cd9316bc1f377ae63f52adbdccd766efd
                path: "/dashboard/products",
                component: ProductsVue,
                name: 'admin.Products'
            },
            {
                path: "/dashboard/orders",
                component: OrdersVue,
                name: 'admin.Orders'
            },
            {
                path: "/dashboard/teammember",
                component: teammember,
                name: 'admin.teammember'
            },
            {
                path: "/dashboard/logistic",
                component: logistic,
                name: 'admin.logistic'
            },

        ],
    },
    {
        component: UserVue,
        redirect: "/shop",
        children: [{
            path: "/home",
            component: HomeVue,
            name: 'user.home'
        }, {
            path: "/checkout",
            component: CheckoutVue,
            name: 'user.checkout'
        }, {
            path: "/produk/:slk",
            component: produkVue
        }, {
            path:"/shop",
            component: ShopVue,
            name:'user.shop'
        }, ]
    },

    {
        path: "/login",
        component: login,
        name: 'login.user'
    },

    {
        path: "/:pathMatch(.*)*",
        component: E404Vue
    },
    {
        path: "/register",
        component: register
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;