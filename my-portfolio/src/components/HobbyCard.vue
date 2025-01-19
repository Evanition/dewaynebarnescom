<template>
    <div class="hobby-card" :class="{ expanded: isExpanded }" @click="toggleExpand">
      <div class="hobby-card-inner">
      <img :src="hobby.image" alt="Hobby Image" class="hobby-image"/>
        <div class="hobby-content">
        <h3>{{ hobby.title }}</h3>
        <p class="short-description" v-if="!isExpanded">{{ hobby.shortDescription }}</p>
         <p class="long-description" v-if="isExpanded">{{ hobby.longDescription }}</p>
          <span v-if="!isExpanded" class="expand-icon"> ▾ </span>
             <span v-if="isExpanded" class="expand-icon"> ▴ </span>
          </div>
      </div>
    </div>
  </template>

<script setup>
  import { defineProps, ref } from 'vue';

  defineProps({
    hobby: {
      type: Object,
      required: true
    }
  });
    const isExpanded = ref(false);
    const toggleExpand = () =>{
        isExpanded.value = !isExpanded.value;
    }
</script>

<style scoped>
.hobby-card {
  border: 1px solid #333;
  padding: 15px;
  margin: 10px;
    border-radius: 5px;
    background-color: #2c2c2c;
  transition: all 0.3s ease;
  cursor: pointer;
}
    .hobby-card-inner{
       display: flex;
       align-items: center;
       gap: 20px;
   }

.hobby-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.hobby-card.expanded {
   padding-bottom: 30px
}
    
  .hobby-image{
    max-height: 100px;
      max-width: 100px;
  }
    

    .hobby-content{
      flex: 1;
      text-align: left
  }
.short-description {
max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.long-description{
  margin-top: 10px
}
    .expand-icon{
    margin-left: auto;
        font-size: 1.5em;
      color: #00ff95
    }

</style>