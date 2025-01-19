<template>
  <div
    class="skill-card fade-in"
    @mouseover="showTooltip = true"
    @mouseout="showTooltip = false"
  >
    <h3>{{ skill.name }}</h3>
      <p>{{ skill.description }}</p>
      <p>Experience: {{ skill.yearsOfExperience }} years</p>
    <span class="tooltip" v-if="showTooltip">Level: {{ skill.level }}%</span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  skill: {
    type: Object,
    required: true,
  },
});

const showTooltip = ref(false);
</script>

<style scoped>
.skill-card {
  border: 1px solid #333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #2c2c2c;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
  position: relative;
}

.skill-card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.fade-in:not(.fade-in-enter-to) {
  opacity: 1;
}

.fade-in-enter-active {
  opacity: 1;
}

.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  top: 0;
  right: 0;
    transform: translateX(100%);
  margin-left: 10px;
  white-space: nowrap;
}
</style>