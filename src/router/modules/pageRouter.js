const pageRouter = {
  path:"/", //컴포넌트 경로
  name: "layout",
  redirect: "/main",
  component:() => import("@/layout/index.vue"),
  children: [
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main.vue"),
    },
  ],
};

export default pageRouter;