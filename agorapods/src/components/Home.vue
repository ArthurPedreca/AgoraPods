<script setup>
import Card from "./Cards.vue";
import imageSrc from "../assets/imgs/card.png";
</script>

<template>
  <main>
    <div class="banners">
      <img class="banner" src="../assets/imgs/banner.avif" alt="" />
      <img class="imagem" src="../assets/imgs/image.jpg" alt="" />
    </div>
    <div class="cards">
      <Card backgroundColor="Roxo" text="Descartáveis" :imageSrc="imageSrc" />
      <Card backgroundColor="Azul" text="FreeBase" :imageSrc="imageSrc" />
      <Card backgroundColor="Vermelho" text="Descartáveis" :imageSrc="imageSrc" />
      <Card backgroundColor="Laranja" text="Descartáveis" :imageSrc="imageSrc" />
      <Card backgroundColor="Verde" text="Descartáveis" :imageSrc="imageSrc" />
    </div>
  </main>
</template>

<style>
main {
  background-color: rgba(128, 128, 128, 0.178);
  position: relative;
  left: 0;
  right: 0;
  width: 100vw; /* Ocupa 100% da largura da viewport */
  margin-left: calc(
    (100% - 100vw) / 2
  ); /* Centraliza o conteúdo considerando o max-width do contêiner */
}

.cards{
  display: flex;
}

.imagem {
  height: 500px;
  border-radius: 1rem;
}

.banner {
  border-radius: 1rem;
  width: 1320px;
  height: 500px;
}

.banners {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding: 25px;
}
</style>
