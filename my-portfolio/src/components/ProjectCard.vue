<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.date }}</p>
    <p>{{ project.description }}</p>
    <div class="skills-list" v-if="project.skills && project.skills.length > 0">
      Tech:
      <span v-for="skill in project.skills" :key="skill" class="skill-badge">{{
        skill
      }}</span>
    </div>
    <div v-if="project.topics && project.topics.length > 0" class="topics">
      Topics:
      <span v-for="topic in project.topics" :key="topic" class="topic-badge">{{
        topic
      }}</span>
    </div>
    <a
      :href="project.link"
      @click="createRipple"
      target="_blank"
      rel="noopener noreferrer"
      v-if="project.link"
      class="button"
      >View Project</a
    >
    <span :class="{ ripple: true, active: rippleActive }" :style="rippleStyle"></span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const rippleActive = ref(false);
const rippleStyle = ref({});

const createRipple = (event) => {
  const button = event.currentTarget;
  const circle = button.querySelector('.ripple');
  if (!circle) {
    return;
  }
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  rippleStyle.value = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    left: `${event.clientX - (button.offsetLeft + radius)}px`,
    top: `${event.clientY - (button.offsetTop + radius)}px`,
  };
  rippleActive.value = true;

  setTimeout(() => {
    rippleActive.value = false;
  }, 500);
};
</script>

<style scoped>
.project-card {
  border: 1px solid #333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
  overflow: hidden;
    background-color: #2c2c2c
}

.project-card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.skills-list {
  margin-top: 10px;
  font-size: 0.9em;
}

.skill-badge {
  display: inline-block;
  background-color: #444;
  color: #fff;
  padding: 4px 8px;
  margin-right: 5px;
  border-radius: 4px;
    cursor: pointer;
   transition: background-color 0.3s ease;
}

.skill-badge:hover{
    background-color: #00ff95;
}

.topics {
  margin-top: 10px;
}
.topic-badge {
  display: inline-block;
  background-color: #555;
  color: #fff;
  padding: 4px 8px;
  margin-right: 5px;
  border-radius: 4px;
}

.button {
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  overflow: hidden;
}

.button:hover {
  background-color: #00ff95;
  transform: scale(1.05);
}

.ripple {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  transform: scale(0);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.ripple.active {
  transform: scale(2);
  opacity: 1;
}
</style>