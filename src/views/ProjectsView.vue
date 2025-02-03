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
    id: 2,
    title: 'Sudoku Solver',
    description: 'Sudoku Solver and GUI made in Java',
    skills: [ { name: 'Java', logo: '/java.png' }],
    topics: ['Machine Learning'],
    date: '2022',
    importance: 10,
  },
  {
    id: 3,
    title: '2048',
    description: '2048 game and solver made in Java Swing',
       skills: [ { name: 'Java', logo: '/java.png' }],
    topics: ['Machine Learning'],
    date: '2022',
    importance: 10,
  },
  {
    id: 4,
    title: 'Twitter Bot',
    description:
      'Built a bot which read tweets and via a Markov decision process was able to generate realistic tweets',
    skills: [ { name: 'Java', logo: '/java.png' }],
    topics: ['AI','Machine Learning'],
    date: '2022',
    importance: 9,
  },
  {
    id: 5,
    title: 'J Compiler',
    description: 'Made a compiler for a stack-based language called J',
    skills: [ { name: 'C', logo: '/c.png' }, { name: 'Assembly', logo: '/asm.png' }],
    topics: ['Compilers'],
    date: '2022',
    importance: 6,
  },
  {
    id: 6,
    title: 'Web Scraper',
    description:
      'Built a web scraper to scrape Penn\'s course catalog and find prerequisites and based on that recommend courses for incoming students',
    skills: [ { name: 'Java', logo: '/java.png' }, { name: 'Html', logo: '/html.png' }],
    topics: ['Web Scraping'],
    date: '2023',
    importance: 6,
  },
  {
    id: 7,
    title: 'Senator Tweets',
    description:
      'Analyzed thousands of senators tweets to determine when and how senators of different parties tweet',
    skills: [{ name: 'SQL', logo: '/sql.png' }],
    topics: ['Data Science','Cloud Computing'],
    date: '2022',
    importance: 8,
  },
  {
    id: 8,
    title: 'Image Compression',
    description:
      'Used divide and conquer to make an image compression algorithm that could compress images by 72%',
    skills: [ { name: 'Java', logo: '/java.png' }],
    topics: ['Algorithms'],
    date: '2023',
    importance: 6,
  },
  {
    id: 9,
    title: 'Penn Shell',
    description:
      'Created a bash-like shell with foreground and background processes, standard input and output redirections, pipelines, and job control.',
    skills: [ { name: 'C', logo: '/c.png' }],
    topics: ['Systems Programming'],
    date: '2023',
    importance: 5,
  },
  {
    id: 10,
    title: 'Penn OS',
    description:
      'Created a fully fledged operating system with FAT, scheduler, and custom system calls',
    link: '#',
    skills: [{ name: 'C', logo: '/c.png' }],
    topics: ['Systems Programming'],
    date: '2023',
    importance: 4,
  },
  {
    id: 11,
    title: 'IOT Monitoring Device',
    description:
      'Implemented and set up a simple end-to-end IoT monitoring service with LoRa client and LoRaWAN gateway devices using simulation in a software emulation',
    link: '#',
    skills: [ { name: 'LLVM', logo: '/llvm.png' }, { name: 'NodeJS', logo: '/nodejs.png' }, { name: 'WireShark', logo: '/wireshark.png' }],
    topics: ['Networks'],
    date: '2023',
    importance: 4,
  },
  {
    id: 12,
    title: 'RISC-V Processor',
    description: `Developed a RISC-V implementation with one other student using SystemVerilog. Included a
               5-stage pipeline, branch prediction, and integration with memory`,
    skills: [ { name: 'System Verilog', logo: '/systemverilog.png' }, { name: 'Python', logo: '/python.png' }],
    topics: ['Systems Programming'],
    date: '2024',
    importance: 4,
  },
  {
    id: 13,
    title: `Analyzing the Impact of Demographic Factors on Crime Patterns in Los Angeles`,
    description: `Analyzed a dataset of over 1 million crime reports in Los Angeles to determine the impact of demographic factors on crime patterns`,
    skills: [
      { name: 'SQL', logo: '/sql.png' },
      { name: 'Python', logo: '/python.png' },
      { name: 'Pandas', logo: '/pandas.png' },
      { name: 'SciKit Learn', logo: '/scikit.png' },
      { name: 'Pytorch', logo: '/pytorch.png' },
      { name: 'Matplotlib', logo: '/matplotlib.png' },
      { name: 'Colab', logo: '/colab.png' },
    ],
    topics: ['Data Science', 'Cloud Computing'],
    date: '2023',
    importance: 3,
  },
  {
    id: 14,
    title: `Box Security System`,
    description: `Built a security system for a box that would only open if the correct password was yelled out by two Arduino UNOs and custom printed parts`,
      skills: [
          { name: 'Arduino', logo: '/arduino.png' },
          { name: 'AutoCAD', logo: '/autocad.png' },
      ],
    topics: ['Embedded Systems'],
    date: '2024',
    importance: 6,
  },
  {
    id: 15,
    title: `Pennstagram`,
    description: `Made a full-stack Instagram clone with a team of 4 hosted on the cloud with a functional recommendation system and chat`,
    skills: [
      {name: 'DynamoDB', logo: '/dynamodb.png'},
      { name: 'TypeScript', logo: '/typescript.png' },
      { name: 'React', logo: '/react.png' },
      { name: 'NodeJS', logo: '/nodejs.png' },
      { name: 'Express', logo: '/express.png' },
      { name: 'EC2', logo: '/ec2.png' },
      { name: 'S3', logo: '/s3.png' },
    ],
    topics: ['Web Development','Full Stack','Databases','Cloud Computing'],
    date: '2024',
    importance: 3,
  },
  {
    id: 18,
    title: `Image Processing with CNNs`,
    description: `Built a system to process images and detect objects in them as well as handwritten digits`,
    skills: [
      { name: 'Python', logo: '/python.png' },
      {name: 'Pytorch', logo: '/pytorch.png'},
    ],
    topics: ['Machine Learning','AI'],
    date: '2024',
    importance: 7,
  },
  {
    id: 19,
    title: `Language Model`,
    description: `Created a model from a corpus of all of Shakespeare's work to generate new Shakespearean text`,
    skills: [
      { name: 'Python', logo: '/python.png' },
      {name: 'Pytorch', logo: '/pytorch.png'},
    ],
    topics: ['Machine Learning','AI'],
    date: '2024',
    importance: 4,
  },
  {
    id: 20,
    title: `Diffusion`,
    description: `Created a model to generate images from a diffusion model`,
    skills: [
      { name: 'Python', logo: '/python.png' },
      {name: 'Pytorch', logo: '/pytorch.png'},
    ],
    topics: ['Machine Learning','AI'],
    date: '2024',
    importance: 4,
  },
  {
    id: 21,
    title: `Reinforcement Learning`,
    description: `Created a model using transformers to predict and create a model for a car's motion around a track`,
    skills: [
      { name: 'Python', logo: '/python.png' },
      {name: 'Pytorch', logo: '/pytorch.png'},
    ],
    topics: ['Machine Learning','AI'],
    date: '2024',
    importance: 3,
  },
  {
    id: 22,
    title: `ComPo`,
    description: `Making an App for the Mack Institute to help innovators find patents and papers related to their ideas`,
    skills: [
      { name: 'Python', logo: '/python.png' },
      { name: 'Pandas', logo: '/pandas.png' },
      {name: 'swift', logo: '/swift.png'},
    ],
    topics: ['AI','Data Science', "Web Scraping"],
    date: '2024',
    importance: 3,
  },
  {
    id: 24,
    title: `Bill Splitter`,
    description: `Developed a mobile app to split bills between friends and family`,
    skills: [
      { name: 'Javascript', logo: '/javascript.png' },
      { name: 'React Native', logo: '/react.png' },

    ],
    topics: ['Frontend','Web Development'],
    date: '2024',
    importance: 5,
  },
  {
    id: 25,
    title: `Risky Business`,
    description: `Making a site which can arbitrage between different betting platforms for guaranteed money`,
    skills: [
      { name: 'Javascript', logo: '/javascript.png' },
      { name: 'React Native', logo: '/react.png' },
      { name: 'S3', logo: '/s3.png' },
      { name: 'Python', logo: '/python.png' },
      { name: 'Pytorch', logo: '/pytorch.png' },
    ],
    topics: ['Full Stack','Data Science', 'Web Development','Cloud Computing','AI','Machine Learning','Frontend'],
    date: '2025',
    importance: 3,
  },
  {
    id: 26,
    title: `web3Builders`,
    description: `Was the main frontend developer for the web3Builders club`,
    skills: [
      { name: 'Javascript', logo: '/javascript.png' },
      { name: 'React', logo: '/react.png' },
    ],
    topics: ['Web Development','Frontend'],
    date: '2023',
    importance: 7,
  },
  {
    id: 27,
    title: `HTTPS Server`,
    description: `Developed a Key Value Store with an HTTPS server`,
    skills: [
      { name: 'EC2', logo: '/ec2.png' },
      { name: 'Apache Spark', logo: '/spark.png' },
    ],
    topics: ['Server Development','Cloud Computing'],
    date: '2024',
    importance: 4,
  },
]);
const activeFilters = ref([]);
const uniqueSkills = computed(() => {
    const allSkills = projects.value.flatMap((project) =>
        project.skills.map((skill) => skill.name)
    );
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
              ) || project.skills.some(skill => skill.name == filterValue);
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
