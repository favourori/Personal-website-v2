import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Resume from './views/Contact.vue'
import Talks from "./views/Talks.vue";
import Favcode from "./views/Favcode.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/contact",
      name: "contact",
      component: Resume
    },
    {
      path: "/talks",
      name: "talks",
      component: Talks
    },

    {
      path: "/favcode",
      name: "favcode",
      component: Favcode
    }
  ]
});
