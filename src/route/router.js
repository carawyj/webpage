import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Team from '../pages/Team.vue'
import Course from '../pages/Course.vue'
import Planning from '../pages/Planning.vue'
import CourseDetail from '../pages/CourseDetail.vue'
import ContactUs from '../pages/ContactUs.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/planning',
      name: 'planning',
      component: Planning
    },
    {
      path: '/contactus',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/detail/:id',
      name: 'course-detail',
      component: CourseDetail
    }
  ]
});
