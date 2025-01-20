<template>
  <div>
    <h2>My Hobbies</h2>
    <div class="carousel">
       <HobbyCard v-for="hobby in hobbies" :key="hobby.id" :hobby="hobby" />
    </div>
  </div>
</template>

<script setup>
    import HobbyCard from '../components/HobbyCard.vue';
    import { ref } from 'vue';

const hobbies = ref([
        {
        id: 1,
        title: 'Running',
            shortDescription: 'I enjoy distance running',
        longDescription: 'I have been running for several years and had joined my track team in highschool before covid hit, since then I have been upkeep and pushing distances I have run 13 5k’s 1 10K and the Philadelphia 2024 Marathon.',
            image: 'running.png'
        },
      {
        id: 2,
        title: 'Machine Learning',
          shortDescription: 'I like working with ML',
          longDescription: 'I have several machine learning projects I have worked on and am working on. My current most impressive one is a drone which has vision and takes audio input and translates that into actions like flips or moving toward objects. (This is in very early stages). I have a local LLM that I tune here and there and I’m excited about the upcoming titan architecture!',
          image: 'ml.png'
      },
      {
        id: 3,
        title: 'Arduino',
        shortDescription: 'I have many arduino pet projects',
        longDescription: 'I have several arduino projects around my house connected to my home server to monitor network traffic, weather, all of the information and various random things around the house. The coolest one I\'ve made was a security box for class which was 3D printed such that they wires and sensors sat in the box and it would only allow people who would yell out a password approach it  otherwise an alarm would go off. Tangentially I am also a Board member of Penn Architects where we provide hardware tools for hackathons such as PennApps and pet projects for Penn Students and the Philly area',
        image: 'arduino.png'
      },
     {
        id: 4,
        title: 'Home Server',
        shortDescription: 'I have a home server for all my local needs',
        longDescription: 'I have a home server to securely store my information as well as keep me on top of my networking and server architecture skills. I run a minecraft server and a few home automations off of it. It is also always useful to SSH into it and use it as a personal CDN as anyone who would want to access information from it lives near me.',
        image: 'server.webp'
     },
       {
        id: 5,
        title: 'Pool',
         shortDescription: 'I enjoy playing pool in my spare time',
        longDescription: 'Freshman year I spent too much time training and mastering the pool table after I became obsessed with it upon introduction. I liked Billiards (Pool) so much I started the Penn Billiards League. We have dozens of members and meet every week and we’re trying to set up an inter collegiate League with Drexel, however their students seem less enthused about the game.',
          image: '8ball.png'
       },
    {
        id: 6,
        title: 'Bird Watching',
          shortDescription: 'Birds are awesome',
        longDescription: 'Bird watching is a more recent Hobby of mine I picked up after I was gifted a pair of binoculars one christmas. I have since gotten several of my friends into bird watching and have catalogued 87 bird species from 4 countries. ',
          image: 'bird.png'
    },
      {
        id: 7,
        title: 'Chess',
        shortDescription: 'I play chess often when I\'m bored',
        longDescription: 'I have been playing Chess since I was 7 years old. I tend to hover around 1400 elo, however I must say I\'ve only been playing for fun for the last several years. Since I love chess I started my high school\'s chess club and taught chess to some of the elementary students.',
          image: 'chess.webp'
      },
    {
        id: 8,
        title: 'Animation',
        shortDescription: 'I’ve been animating as a Hobby for years',
          longDescription: 'I have been a terrible animator for a while, it was mostly hand drawn or stop motion for years but recently I’ve ventured into 3D animation with tools like Maya. If you ever want to talk about animation or art in general I would love to!',
          image: 'pencil.png'
    }
    ]);
</script>

<style scoped>
    .carousel{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>