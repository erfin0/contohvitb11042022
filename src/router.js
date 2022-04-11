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

        component: UserVue,
        redirect: "/shop",
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
        path: "/:pathMatch(.*)*",
        component: E404Vue
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;