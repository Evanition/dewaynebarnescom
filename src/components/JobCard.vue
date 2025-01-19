<template>
  <div class="job-card">
    <h3>{{ job.title }}</h3>
    <p class="company">{{ job.company }}</p>
    <p class="dates">{{ job.dates }}</p>
    <div class="tools-list" v-if="job.tools && job.tools.length > 0">
      Tools:
      <span v-for="tool in job.tools" :key="tool" class="tool-badge">{{ tool }}</span>
    </div>
    <p class="description">{{ job.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  job: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.job-card {
  border: 1px solid #333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #2c2c2c;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
}
.job-card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.company {
  font-weight: bold;
}
.dates {
  font-style: italic;
}
.tools-list {
  margin-top: 10px;
  font-size: 0.9em;
}
.tool-badge {
  display: inline-block;
  background-color: #444;
  color: #fff;
  padding: 4px 8px;
  margin-right: 5px;
  border-radius: 4px;
}

.description {
  margin-top: 10px;
}
</style>