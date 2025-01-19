import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import SkillsView from '../views/SkillsView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import HobbiesView from '../views/HobbiesView.vue';
import ContactView from '../views/ContactView.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/skills',
        name: 'skills',
        component: SkillsView,
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
        path: '/hobbies',
        name: 'hobbies',
        component: HobbiesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;