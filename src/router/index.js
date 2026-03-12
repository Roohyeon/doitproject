import Vue from "vue";
import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter";

Vue.use(VueRouter);
const router = new VueRouter({
    mode:"hash",
    routes: [pageRouter],
});

const routers = createRouter({
  history: createWebHistory("/doitproejct/"),
  router,
});
export default router;