import Vue from "vue";
import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter";

Vue.use(VueRouter);
const router = new VueRouter({
    mode:"hash",
    routes: [pageRouter],
});
export default router;