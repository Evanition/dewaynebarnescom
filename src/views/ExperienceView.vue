<template>
  <div>
    <h2>My Job Experience</h2>
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    <div class="affiliations">
      <span>Founder of Penn Billiards League</span>
      <span class="separator">/</span>
      <span>Board Member of Penn Architects</span>
       <span class="separator">/</span>
      <span>Member of The National Society of Black Engineers</span>
        <span class="separator">/</span>
      <span>Member of Penn Data Science Group</span>
    </div>
  </div>
</template>

<script setup>
import JobCard from '../components/JobCard.vue';
import { ref } from 'vue';

const jobs = ref([
  {
    id: 1,
    title: 'Google Step Intern',
    company: 'Google',
    dates: 'Summer 2023',
    tools: ['Typescript', 'NodeJs', 'Firebase'],
    description:
      'Worked on the Google STEP team as a software engineering intern, gaining experience in large scale software development.',
  },
  {
    id: 2,
    title: 'Developer',
    company: 'Company X',
    dates: 'Summer 2024 - Present',
    tools: ['Python', 'Swift', 'Pandas'],
    description:
      'Currently working as a full stack developer, developing both front and back end applications.',
  },
  {
    id: 3,
    title: 'Calculus Tutor',
    company: 'Upenn',
    dates: 'Summer 2021 - Present',
    description:
      'Helped students learn and understand basic and advanced topics in calculus, including limits, derivatives, integrals, and series.',
  },
]);
</script>

<style scoped>
.affiliations {
  text-align: center;
  width: fit-content;
  font-size: 1em;
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: center;
  display: flex;
  gap: 5px; /* Adjust as needed */
  justify-content: center;
   font-family: 'Roboto Mono', monospace;
 color: #ddd;
}

      .separator{
          display: inline-block;
          margin: 0 5px;
          color: #00ff95
      }
 .affiliations span{
    display: inline-block;
  }
</style>