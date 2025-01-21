```vue
<template>
  <div class="fade-slide-in">
    <div class="hero">
      <h1>Dewayne Barnes</h1>
      <p class="tagline">Aspiring Software Engineer | Passionate about Innovation</p>
      <p class="intro">
        I am a highly motivated Senior computer science student at UPenn with a passion for software
        development and a particular interest in Machine Learning. I am excited to
        contribute my skills to innovative projects and seek opportunities where I can
        learn and grow.
      </p>
      <div class="counter-container">
        <div class="counter">
          <span class="time-part">{{ years }}</span>
          <span class="label">years</span>
          <span class="time-part">{{ months }}</span>
          <span class="label">months</span>
          <span class="time-part">{{ days }}</span>
          <span class="label">days</span>
          <span class="time-part">{{ hours }}</span>
          <span class="label">hours</span>
          <span class="time-part">{{ minutes }}</span>
          <span class="label">minutes</span>
          <span class="time-part">{{ seconds }}</span>
          <span class="label">seconds</span>
          <span class="time-part">{{ milliseconds }}</span>
          <span class="label">milliseconds</span>
        </div>
      </div>
      <div class="cta-container">
        <router-link to="/projects" class="button">View My Projects</router-link>
        <router-link to="/contact" class="button">Get in Touch</router-link>
        <router-link to="/Resume.pdf" class="button">View My Resume</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const birthDate = new Date('2003-05-02T12:03:00');
const years = ref(0);
const months = ref(0);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const milliseconds = ref(0);

let interval = null;

const updateAge = () => {
  const now = new Date();
  let timeDiff = now.getTime() - birthDate.getTime();

  milliseconds.value = timeDiff % 1000;
  timeDiff = Math.floor(timeDiff / 1000);
  seconds.value = timeDiff % 60;
  timeDiff = Math.floor(timeDiff / 60);
  minutes.value = timeDiff % 60;
  timeDiff = Math.floor(timeDiff / 60);
  hours.value = timeDiff % 24;
  timeDiff = Math.floor(timeDiff / 24);

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let birthDay = birthDate.getDate();

  let currentYear = now.getFullYear();
  let currentMonth = now.getMonth();
  let currentDay = now.getDate();

  years.value = currentYear - birthYear;
  months.value = currentMonth - birthMonth;
  days.value = currentDay - birthDay;

  if (months.value < 0) {
    years.value--;
    months.value = 12 + months.value;
  }

  if (days.value < 0) {
    months.value--;
    days.value = new Date(currentYear, currentMonth, 0).getDate() + days.value;
  }
};

onMounted(() => {
  updateAge();
  interval = setInterval(updateAge, 10);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  position: relative;
  min-height: 500px;
}
.tagline {
  font-style: italic;
  font-size: 1.2em;
  color: #00ff95;
  margin-bottom: 10px;
}
.intro {
  margin-bottom: 20px;
}

.cta-container {
  display: flex;
  gap: 20px;
}
.button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #00ff95;
  transform: scale(1.05);
}
.fade-slide-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-in.fade-slide-in-enter-active {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-in:not(.fade-slide-in-enter-to) {
  opacity: 1;
  transform: translateY(0);
}
.counter-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.counter {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-family: 'Roboto Mono', monospace;
}
.time-part {
  font-size: 2rem;
  color: #00ff95;
}
.label {
  font-size: 1rem;
}
</style>
```