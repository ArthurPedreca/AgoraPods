<template>
    <div class="product-card">
      <img :src="imageSrc" alt="Produto" class="product-image" />
      <h2 class="product-title">{{ title }}</h2>
      <div class="product-price">
        <span class="original-price">{{ originalPrice }}</span>
        <span class="installment">{{ installment }}</span>
        <span class="pix-price">{{ pixPrice }}</span>
      </div>
      <button class="product-button">VER OPÇÕES</button>
    </div>
  </template>
  
  <script setup>

  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: 'Nicsalt Ignite Subzero 35mg 30ml'
    },
    originalPrice: {
      type: String,
      required: true,
      default: 'R$ 99,90'
    },
    installment: {
      type: String,
      required: true,
      default: '3x de R$ 33,30 s/ juros'
    },
    pixPrice: {
      type: String,
      required: true,
      default: 'R$ 89,91 no pix'
    },
    imageSrc: {
      type: String,
      required: true,
      default: "https://lojapodvape.com/wp-content/uploads/2024/08/Nicsalt-Ignite-30ml-174x178.jpg" // Substitua pelo caminho correto da imagem
    }
  })

  </script>
  
  <style scoped>
  *{
    font-family: Montserrat;
  }
  .product-card {
    width: 150px;
    padding: 16px;
    margin:10px;
    background-color: var(--gray-color);
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
  
  .product-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }
  
  .product-price {
    margin-bottom: 16px;
  }
  
  .original-price {
    font-size: 14px;
    text-decoration: line-through;
    color: #888;
  }
  
  .installment {
    display: block;
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
  }
  
  .pix-price {
    font-size: 1.3rem;
    font-weight: bold;
    color: red;
    font-family: Gilroy;
  }
  
  .product-button {
    padding: 10px 20px;
    background-color: #8b16ff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .product-button:hover {
    background-color: #7012cc;
  }
  </style>
  