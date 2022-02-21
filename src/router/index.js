import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import CheckoutView from "../views/CheckoutView.vue";


const routes = [
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/products/:productId",
    name: "product",
    component: ProductView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
