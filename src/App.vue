<template>
  <nav :class="{ shadow: isNavShadow }">
    <!-- Logo -->
    <div class="logo">
      <img src="/logo.png" alt="logo" class="logo-image" />
    </div>
    
    <!-- Hamburger icon (visible on mobile) -->
    <button class="menu-button" @click="toggleMenu">
      ☰
    </button>

    <!-- Navigation links -->
    <div class="nav-links" :class="{ showMenu: showMenu }">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/projects" @click="closeMenu">Projects</router-link>
      <router-link to="/experience" @click="closeMenu">Experience</router-link>
      <router-link to="/skills" @click="closeMenu">Skills</router-link>
      <router-link to="/hobbies" @click="closeMenu">Hobbies</router-link>
      <router-link to="/contact" @click="closeMenu">Contact</router-link>
    </div>
  </nav>

  <!-- Router view with transition -->
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isNavShadow = ref(false);
const showMenu = ref(false);

const handleScroll = () => {
  isNavShadow.value = window.scrollY > 50;
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Basic nav styling */
nav {
  padding: 15px;
  background-color: #2c2c2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Logo area */
.logo {
  font-weight: bold;
  font-size: 1.5em;
  margin-right: auto;
  color: #00ff95;
  display: flex;
  align-items: center;
}
.logo-image {
  max-height: 30px;
  margin-right: 10px;
}

/* Navigation links container */
.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
  transition: max-height 0.3s ease;
}

/* Link styling */
nav a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}
nav a:hover {
  color: #00ff95;
}
nav a.router-link-active {
  font-weight: bold;
  color: #00ff95;
}

/* Hover underline effect */
nav a {
  position: relative;
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

/* Hamburger button (hidden on desktop by default) */
.menu-button {
  display: none;
  font-size: 2em;
  color: #ddd;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  nav {
    flex-wrap: wrap;
    padding: 10px;
  }

  /* Show the hamburger on mobile */
  .menu-button {
    display: block;
    margin-left: auto;
  }

  /* Hide the nav links by default on mobile */
  .nav-links {
    position: absolute;
    top: 60px; /* Adjust based on your nav height */
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: #2c2c2c;
    max-height: 0; /* Collapsed */
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  /* When toggled open, make them visible */
  .nav-links.showMenu {
    max-height: 500px; /* Enough to show all links */
    padding: 10px;
  }

  /* Adjust link spacing in dropdown mode */
  .nav-links a {
    margin: 10px 0;
  }

  .logo {
    margin-bottom: 10px;
  }

  .logo-image {
    max-height: 20px;
  }
}
</style>
