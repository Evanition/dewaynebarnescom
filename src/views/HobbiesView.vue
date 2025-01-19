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
           shortDescription: 'I enjoy distance running 2',
       longDescription: 'I have run in 13 5k’s, 3 10k’s and the 2024 Philadelphia marathon',
           image: 'running.png'
       },
     {
       id: 2,
       title: 'Machine Learning',
         shortDescription: 'I have a large interest in machine learning',
         longDescription: 'I have a large interest in machine learning and have done several projects involving it, currently I’m tinkering with a local multimodal model in a drone with a friend of mine to see if we can get a drone to perform actions such as flipping and finding a tree from speech.',
         image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
     {
       id: 3,
       title: 'Arduino',
       shortDescription: 'I have a lot of little arduino pet projects around my house',
       longDescription: 'I have a lot of little arduino pet projects around my house. I have a little rc car that can autonomously find my voice and drive up to me when I call for it. I have also made a little robot which can play tic tac toe with you.',
         image: 'https://images.unsplash.com/photo-1531206715440-075174bf5a38?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
    {
       id: 4,
       title: 'Home Server',
       shortDescription: 'I have a home server running with several terabytes of local storage',
       longDescription: 'I have a home server running with several terabytes of local storage for media and various Applications, it’s nice to keep my Linux skills sharp and to have privacy.',
        image: 'https://images.unsplash.com/photo-1634800993139-37c9ab9651e9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
      {
       id: 5,
       title: 'Pool',
        shortDescription: 'I started the Penn Billiards League at Upenn',
       longDescription: 'I started the Penn Billiards League at Upenn and we currently have over 20 members and have been going strong for 4 years.',
        image: 'https://images.unsplash.com/photo-1558763900-e7e2c061ed12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
   {
       id: 6,
       title: 'Bird Watching',
         shortDescription: 'I love birding and taking pictures of birds.',
       longDescription: 'I love birding and taking pictures of birds. I currently have pictures of macaws, pigeons from 7 countries. Peacocks, penguins, and lots of eagles.',
        image: 'https://images.unsplash.com/photo-1591556488766-1bc91c9c7d98?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
   },
     {
       id: 7,
       title: 'Chess',
       shortDescription: 'I’ve been playing chess since I was 7',
       longDescription: 'I’ve been playing chess since I was 7 and I started my highschools chess club while I was there. I would love to play or talk chess with anyone interested.',
         image: 'https://images.unsplash.com/photo-1596249643478-274a2b932478?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
   {
       id: 8,
       title: 'Animation',
       shortDescription: 'I’ve been animating as a Hobby for years',
         longDescription: 'I’ve been animating as a Hobby for years, I started off doing 2D hand drawn animation now I dabble in 3D animation with Maya and blender.',
         image: 'https://images.unsplash.com/photo-1532980400857-4f124464053c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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