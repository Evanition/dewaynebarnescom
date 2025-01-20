<template>
  <div>
    <h2>My Skills</h2>
    <div class="skills-grid">
      <SkillCard
        v-for="(skill, index) in skills"
        :key="skill.id"
        :skill="skill"
        :order="index + 1"
        :color="colors[index % colors.length]"
      />
    </div>
  </div>
</template>

<script setup>
import SkillCard from '../components/SkillCard.vue';
import { ref } from 'vue';

const skills = ref([
  {
    id: 1,
    name: 'Machine Learning',
    description:
      'I have quite a lot of experience with Machine learning, I’ve taken classes which range from making LLM’s with corpuses of hundreds thousands of words to working with transformers and LSTM I’ve made CNN’s RNN”s and little versions of just about every architecture just to play around with them. To Quote Alejandro Ribeiro ~ “ Reinforcement Learning is the closest thing we have to magic.”',
    yearsOfExperience: 3,
  },
  {
    id: 2,
    name: 'Data Science',
    description:
      'I work with lots of data when developing or tuning machine learning models which requires processing and parsing. Outside of that I have also taken quite a few courses on Data analytics as it is a generally applicable skill to Machine Learning or web scraping … I’ve refined my ability to interpret and visualize data during this time.',
    yearsOfExperience: 2,
  },
  {
    id: 3,
    name: 'Web Development',
    description:
      'Almost everything and everyone in life will ask for a website so I’ve been building them for years, initially through CRMS and prebuilt solutions then transitioning to frontend development and now fullstack. I’ve also learned a significant amount about color theory and building for accessibility through my time at Penn which has shaped how my site design has changed over time.',
    yearsOfExperience: 5,
  },
  {
    id: 5,
    name: 'Server Development',
    description:
      'I’ve had to create servers for various websites and email clients for friends and family members through which I’ve learned much about handling and maintaining servers whether on the cloud or locally.',
    yearsOfExperience: 2,
  },
  {
    id: 9,
    name: 'Cloud Computing',
    description:
      'I use cloud computing in everything, surprisingly though I’ve only briefly used Azure. I mostly use AWS though I’ve used Google cloud through firebase and occasionally to call the Gemini Api for some projects.',
    yearsOfExperience: 3,
  },
  {
    id: 10,
    name: 'Dev Ops',
    description:
      'Working at Google taught me a lot about QA and the systems and checks needed to get a team reliable but efficient. On most group projects I’ve worked on we’ve established automated software checkers and cross-checking to prevent faulty or unclean code from entering production.',
    yearsOfExperience: 2,
  },
]);
const colors = ref(['#00ff95', '#00ffff', '#ff00ff', '#ffff00', '#ff0000', '#0000ff']);
</script>

<style scoped>
.skills-page {
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>