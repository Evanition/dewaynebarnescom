<template>
  <div
    class="skill-card fade-in"
    @mouseover="showTooltip = true"
    @mouseout="showTooltip = false"
  >
    <h3>
      <span class="animated-text" :style="{ animationDelay: order * 0.2 + 's' }">
        {{ skill.name }}
      </span>
    </h3>
    <p>
      <span class="animated-text" :style="{ animationDelay: order * 0.2 + 's' }">
        {{ skill.description }}
      </span>
    </p>
    <p>
      <span class="animated-text" :style="{ animationDelay: order * 0.2 + 's' }">
        Experience: {{ skill.yearsOfExperience }} years
      </span>
    </p>
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
   order: {
        type: Number,
      required: true
    }
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease,
    background-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #333;
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

.animated-text {
  background: linear-gradient(90deg, #ddd, #00ff95, #ddd);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  animation: wave 4s linear infinite;
}

@keyframes wave {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -100% 0%;
  }
}
</style>