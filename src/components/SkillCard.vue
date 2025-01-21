<template>
  <div
    class="skill-card fade-in"
    @mouseover="showTooltip = true"
    @mouseout="showTooltip = false"
  >
    <h3>
      <!-- Use :style to inject the custom property for animation delay -->
      <span class="animated-text" :style="{ '--waveDelay': (order - 1) * 0.3 + 's' }">
        {{ skill.name }}
      </span>
    </h3>
    <p>
      <span class="animated-text" :style="{ '--waveDelay': (order - 1) * 0.3 + 's' }">
        {{ skill.description }}
      </span>
    </p>
    <p>
      <span class="animated-text" :style="{ '--waveDelay': (order - 1) * 0.3 + 's' }">
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
    required: true,
  },
});

const showTooltip = ref(false);
</script>

<style scoped>
.skill-card {
  /* same as before */
}

.skill-card:hover {
  /* same as before */
}

/* Wave keyframes remain the same */
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

/* The main difference: use an animation delay via CSS variable. */
.animated-text {
  background: linear-gradient(90deg, #ddd, #00ff95, #ddd);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  
  /* The wave is 4s, repeats infinitely, and each card offset by --waveDelay */
  animation: wave 4s linear infinite;
  animation-delay: var(--waveDelay, 0s);
}

.tooltip {
  /* same as before */
}

/* For the fade-in effect you already had */
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
</style>
