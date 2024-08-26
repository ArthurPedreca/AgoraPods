<script setup>
import Card from "./Cards.vue";
import imageSrc from "../assets/imgs/card.png";
</script>

<template>
  <main>
    <section>
      <div class="banners">
        <img class="banner" src="../assets/imgs/banner.avif" alt="Banner principal" />
        <img class="imagem" src="../assets/imgs/image.jpg" alt="Imagem lateral" />
      </div>
      <div class="cards">
        <Card backgroundColor="Roxo" text="Descartáveis" :imageSrc="imageSrc" />
        <Card backgroundColor="Laranja" text="FreeBase" :imageSrc="imageSrc" />
        <Card backgroundColor="Vermelho" text="Descartáveis" :imageSrc="imageSrc" />
        <Card backgroundColor="Laranja" text="Descartáveis" :imageSrc="imageSrc" />
        <Card backgroundColor="Verde" text="Descartáveis" :imageSrc="imageSrc" />
      </div>
    </section>
  </main>
</template>

<style>
main {
  background-color: var(--gray-color);
  position: relative;
  left: 0;
  right: 0;
  width: 100vw;
  margin-left: calc((100% - 100vw) / 2);
}

.cards {
  display: flex;
}

.imagem {
  width: 400px;
  height: 400px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 1rem;
  margin-left: 10px;
}

.banner {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 1rem;
}

.banners {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

section {
  max-width: 1200px; 
  width: 100%; 
  position: absolute; 
  left: 50%; 
  transform: translateX(-50%); 
  box-sizing: border-box; 
}
</style>
