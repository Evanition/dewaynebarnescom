<template>
  <div>
    <h2>My Skills</h2>
    <SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" />
  </div>
</template>

<script setup>
import SkillCard from '../components/SkillCard.vue';
import { ref } from 'vue';

const skills = ref([
    { id: 1, name: 'Machine Learning', description: 'Experience with various machine learning algorithms and techniques.', level: 85, yearsOfExperience: 2 },
    { id: 2, name: 'Data Science', description: 'Experience with data analysis, visualization, and interpretation techniques', level: 70, yearsOfExperience: 2 },
    { id: 3, name: 'Web Development', description: 'Experience in front-end and back-end web development', level: 80, yearsOfExperience: 3 },
    { id: 4, name: 'Mobile App Development', description: 'Experience in developing mobile applications for both Android and iOS.', level: 60, yearsOfExperience: 1 },
    { id: 5, name: 'Server Development', description: 'Experience in developing robust server applications using Node.js', level: 75, yearsOfExperience: 2 },
     { id: 6, name: 'Systems Programming', description: 'Experience with systems programming and low level system components', level: 70, yearsOfExperience: 1 },
    { id: 7, name: 'Database Design', description: 'Experience in database design and implementation, using relational databases like mySQL and PostgreSQL.', level: 80, yearsOfExperience: 2 },
     { id: 8, name: 'Embedded Systems', description: 'Experience in embedded systems programming and development.', level: 65, yearsOfExperience: 1 },
     { id: 9, name: 'Cloud Computing', description: 'Experience working with various cloud platforms.', level: 60, yearsOfExperience: 1 },
    { id: 10, name: 'Dev Ops', description: 'Experience in development operations and deployment.', level: 70, yearsOfExperience: 1 },
]);
</script>