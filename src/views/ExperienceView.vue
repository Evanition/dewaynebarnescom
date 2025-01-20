<template>
  <div>
    <h2>My Job Experience</h2>
    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
  </div>
</template>

<script setup>
import JobCard from '../components/JobCard.vue';
import { ref } from 'vue';

const jobs = ref([
  {
    id: 1,
    title: 'Google Step Intern',
      company: {name: 'Google', logo: '/google.png'},
    dates: 'Summer 2023',
    tools: [
        {name: 'Typescript', logo: '/typescript.png'},
        {name: 'NodeJs', logo: '/nodejs.png'},
         {name: 'Firebase', logo: '/firebase.png'}
           ],
    description:
      'Worked as a Google STEP employee as my first internship. I worked on the firebase team developing a WebOTP API for the firebase platform. I learned how industry development works with Agile development and how to work with a team of developers.',
  },
  {
    id: 2,
    title: 'Developer',
    company: {name: 'Mack Institute of Innovation at Wharton', logo: '/upenn.png'},
    dates: 'Summer 2024 - Present',
    tools: [
        { name: 'Python', logo: '/python.png' },
        { name: 'Swift', logo: '/swift.png' },
        { name: 'Pandas', logo: '/pandas.png' }
    ],
    description:
      'Using the GPT-4o api and various patent and publication databases to map an innovator\'s idea of an invention. I present the most similar patents and papers in a graph with intractable elements so comparison is made easy. I also use the found patents and processes to estimate costs, currently the tool is tuned for the medical industry and we are working with professionals in the medical industry to improve upon it.',
  },
  {
    id: 3,
    title: 'Calculus Tutor',
    company: {name: 'Self Employed', logo: '/logo.png'},
    dates: 'Summer 2021 - Present',
    description:
      'I tutor in mathematics ranging from Algebra to Calculus it started as volunteer tutoring in High School but as I transitioned into college I went fully independent ',
  },
]);
</script>