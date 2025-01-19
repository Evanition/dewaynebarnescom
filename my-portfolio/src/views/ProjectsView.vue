<template>
  <div>
    <h2>My Projects</h2>
    <div v-if="activeFilters.length > 0">
      <button @click="clearFilters" class="clear-button">Clear Selections</button>
    </div>
    <div>
      Topics:
      <button
        v-for="topic in uniqueTopics"
        :key="topic"
        @click="filterBy('topic', topic)"
        :class="{ active: activeFilters.includes(topic) }"
      >
        {{ topic }}
      </button>
    </div>
    <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import { ref, computed } from 'vue';

const projects = ref([
 {
   id: 1,
   title: 'Personal Portfolio',
   description: 'This is the personal portfolio you are looking at',
   link: '#',
   skills: ['Vue.js', 'JavaScript', 'CSS'],
   topics: ['Web Development', 'Frontend'],
   date: '2024',
     importance: 3,
 },
 {
   id: 2,
   title: 'Sudoku Solver',
   description: 'Sudoku Solver and GUI made in Java',
   link: '#',
   skills: ['Java'],
   topics: ['Macine Learning'],
   date: '2022',
     importance: 10,
 },
 {
   id: 3,
   title: '2048',
   description: '2048 game and solver made in Java Swing',
   link: '#',
   skills: ['Java'],
   topics: ['Machine Learning'],
   date: '2022',
     importance: 10,
 },
 {
   id: 4,
   title: 'Twitter Bot',
   description: 'Built a bot whichread tweets in and via a markov decision process was able to generate realistic tweets',
   link: '#',
   skills: ['Java'],
   topics: ['AI','Machine Learning'],
   date: '2022',
     importance: 9,
 },
 {
   id: 5,
   title: 'J Compiler',
   description: 'Made a compiler for a stacked based language called J ',
   link: '#',
   skills: ['C', 'Assembly'],
   topics: ['Compilers'],
   date: '2022',
     importance: 6,
 },
 {
   id: 6,
   title: 'Web Scraper',
   description: 'Built a web scraper to scrape Penn\'s course catalog and find prerequisites and based on that reccommend courses for incoming students',
   link: '#',
   skills: ['Java', 'Html'],
   topics: ['Web Scrpaing'],
   date: '2023',
     importance: 6,
 },
 {
   id: 7,
   title: 'Senator Tweets',
   description: 'Analyzed thousands of senators tweets to determine when and how seneators of different parties tweet',
   link: '#',
   skills: ['SQL'],
   topics: ['Data Science'],
   date: '2022',
     importance: 8,
 },
 {
   id: 8,
   title: 'Image Compression',
   description: 'Used divide and conquer to make an image compression alorgorithim that couls compress images by 72%',
   link: '#',
   skills: ['Java'],
   topics: ['Algorithims'],
   date: '2023',
     importance: 6,
 },
 {
   id: 9,
   title: 'Penn Shell',
   description: 'Created a bash like shell with reground and background processes; standard input and output redirections; pipelines; and job control.',
   link: '#',
   skills: ['C'],
   topics: ['Systems Programming'],
   date: '2023',
     importance: 5,
 },
 {
   id: 10,
   title: 'Penn OS',
   description: 'Created a fully fledged operating system with FAT, schedueler, and custom system calls',
   link: '#',
   skills: ['C'],
   topics: ['Systems Programming'],
   date: '2023',
     importance: 4,
 },
 {
   id: 11,
   title: 'IOT Monitoring Device',
   description: 'implement and set up a simple end-to-end IoT monitoring service with LoRaclient and LoRaWAN gateway devices using simulation in a software emulaton',
   link: '#',
   skills: ['LLVM', 'NodeJS', 'WireShark'],
   topics: ['Networks'],
   date: '2023',
     importance: 4,
 },
 {
   id: 12,
   title: 'Risc V Processor',
   description: `Developed a RISC-V implementation with one other student using the SystemVerilog language. The implementation includes a
               5-stage pipeline, branch prediction, and integration with memory. The project was developed using a Docker container and
               tested using a suite of RISC-V assembly programs to ensure correctness and performance. The implementation was able to
               effectively balance a multi-cycle datapath and pipelining to achieve high performance.`,
   link: '#',
   skills: ['System Verilog', 'Python'],
   topics: ['Systems Programming'],
   date: '2024',
     importance: 4,
 },
   {
   id: 13,
   title: `Analyzing the Impact of Demographic Factors on Crime Patterns in Los Angeles`,
   description: `to fill `,
   link: '#',
   skills: ['SQL', 'Python', 'Pandas', 'SciKit Learn', 'Pytorch', 'Matplotlib'],
   topics: ['Systems Programming'],
   date: '2023',
     importance: 3,
 },
 {
   id: 14,
   title: `Box Security system`,
   description: `to fill `,
   link: '#',
   skills: ['Arduino', '3D Printing', 'AutoCAD'],
   topics: ['Embedded Systems'],
   date: '2024',
     importance: 6,
  },
 {
   id: 15,
   title: `Pennstagram`,
   description: `to fill `,
   link: '#',
   skills: ['MongoDB', 'TypeScript', 'React', 'NodeJS', 'Express', 'EC2', 'S3'],
   topics: ['Web Development', 'Frontend', 'Backend', 'Databases', 'Cloud Computing'],
   date: '2024',
     importance: 6,
  },
 {
   id: 16,
   title: `Markov Decision Processess`,
   description: ``,
   link: '#',
   skills: ['Python'],
   topics: ['Machine Learning', 'AI'],
   date: '2024',
     importance: 6,
 },
]);
const activeFilters = ref([]);
const uniqueSkills = computed(() => {
  const allSkills = projects.value.flatMap((project) => project.skills);
  return [...new Set(allSkills)];
});
const uniqueTopics = computed(() => {
  const allTopics = projects.value.flatMap((project) => project.topics);
  return [...new Set(allTopics)];
});

  const filteredProjects = computed(() => {
      if (activeFilters.value.length === 0) {
          return projects.value.sort((a, b) => a.importance - b.importance)
      }
      return projects.value
          .filter((project) => {
              return activeFilters.value.every(filterValue => {
                  return (
                    project.topics.includes(filterValue)
                  )
              })
          })
          .sort((a, b) => a.importance - b.importance)
  });

const filterBy = (type, value) => {
  if (activeFilters.value.includes(value)) {
    activeFilters.value = activeFilters.value.filter((item) => item !== value);
  } else {
    activeFilters.value.push(value);
  }
};
const clearFilters = () => {
  activeFilters.value = [];
};
</script>

<style scoped>
.clear-button {
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-bottom: 10px;
}

.clear-button:hover {
  background-color: #00ff95;
  transform: scale(1.05);
}

button {
  padding: 8px 16px;
  background-color: #444;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}
button.active {
  background-color: #00ff95;
}
</style>