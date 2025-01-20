<template>
  <div class="job-card">
    <h3>{{ job.title }}</h3>
     <p class="company">
         <img :src="job.company.logo" alt="company logo" class="company-logo"/>
        {{ job.company.name }}
     </p>
    <p class="dates">{{ job.dates }}</p>
    <div class="tools-list" v-if="job.tools && job.tools.length > 0">
      Tools:
      <span v-for="tool in job.tools" :key="tool.name" class="tool-badge">
        <img :src="tool.logo" alt="tool logo" class="tool-logo"/>
         {{ tool.name }}
      </span>
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
  .company{
      font-weight: bold;
      display: inline-flex;
      align-items: center;
  }
    .company-logo{
        max-height: 20px;
      max-width: 20px;
      margin-right: 5px;
    }
.dates {
  font-style: italic;
}
.tools-list {
  margin-top: 10px;
  font-size: 0.9em;
}
.tool-badge {
    display: inline-flex;
    align-items: center;
  background-color: #444;
  color: #fff;
  padding: 4px 8px;
  margin-right: 5px;
  border-radius: 4px;
}
.tool-logo{
    max-width: 20px;
  max-height: 20px;
    margin-right: 5px;
}

.description {
  margin-top: 10px;
}
</style>