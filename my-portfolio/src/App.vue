<template>
  <nav :class="{ shadow: isNavShadow }">
    <div class="logo">DB</div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/hobbies">Hobbies</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';

const isNavShadow = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isNavShadow.value = true;
  } else {
    isNavShadow.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
nav {
  padding: 20px;
  background-color: #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  transition: box-shadow 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.logo {
    font-weight: bold;
    font-size: 1.5em;
    margin-right: auto;
    color: #00ff95;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

nav a {
  color: #ddd;
  text-decoration: none;
  margin-right: 10px;
}

nav a.router-link-active {
  font-weight: bold;
  color: #00ff95;
}

nav a {
  position: relative;
  text-decoration: none;
}

nav a::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #00ff95;
  transition: width 0.3s ease, left 0.3s ease;
}

nav a:hover::before {
  width: 100%;
  left: 0;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .logo {
    margin-bottom: 10px;
  }
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
  }
  nav a {
    margin-right: 0;
  }
}
</style>