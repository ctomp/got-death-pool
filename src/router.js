import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/characters",
      name: "character-list",
      component: () =>
        import(/* webpackChunkName: "character" */ "./views/Characters.vue")
    },
    {
      path: "/characters/:characterName",
      name: "character-detail",
      component: () =>
        import(/* webpackChunkName: "character-detail" */ "./views/CharacterDetail.vue"),
      props: true
    },
    {
      path: "/scoreboard",
      name: "scoreboard",
      component: () => import("./views/Scoreboard.vue")
    },
    {
      path: "/player/:playerName",
      name: "player-detail",
      component: () => import("./views/PlayerDetail.vue"),
      props: true
    },
    {
      path: "/comparison",
      name: "comparison",
      component: () => import("./views/Compare.vue")
    }
  ]
});
