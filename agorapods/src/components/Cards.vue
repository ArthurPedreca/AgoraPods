<template>
    <div class="card" :style="backgroundStyle">
      <div class="overlay"></div>
      <img :src="imageSrc" alt="">
      <h1>{{ text }}</h1>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    backgroundColor: {
      type: String,
      default: 'Vermelho'
    },
    text: {
      type: String,
      default: 'Descartáveis'
    },
    imageSrc: {
      type: String,
      required: true
    }
  })
  
  const gradientColors = {
    Vermelho: {
      start: '#CF232B',
      end: '#A5373C'
    },
    Azul: {
      start: '#3793A5',
      end: '#01D2FB'
    },
    Roxo: {
      start: '#CF23C4',
      end: '#FB01E9'
    },
    Verde: {
        start: '#51A537',
        end: '#4BCF23'
    },
    Laranja: {
      start: '#FB7A00',
      end: '#FBB601'
    }
  }
  
  const backgroundStyle = computed(() => {
    const colors = gradientColors[props.backgroundColor] || gradientColors['Vermelho']
    return {
      background: `linear-gradient(45deg, ${colors.start}, ${colors.end})`
    }
  })
  </script>
  
  <style scoped>
  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 250px;
    border-radius: 1rem;
    cursor: pointer;
    margin-top: 35px;
    overflow: hidden;
  }
  
  .card img {
    width: 125%;
    transition: transform 0.3s ease;
  }
  
  .card h1 {
    position: absolute;
    font-family: Gilroy;
    color: white;
    z-index: 2;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s ease;
    z-index: 1;
    border-radius: 1rem;
  }
  
  /* Efeito de hover */
  .card:hover .overlay {
    background-color: rgba(0, 0, 0, 0.212);
  }
  
  .card:hover img {
    transform: scale(1.2);
  }
  </style>
  