<script setup>
import Card from "./Cards.vue";
import imageSrc from "../assets/imgs/card.png";
</script>

<template>
  <main>
    <section>
      <div class="banners">
        <div class="banner-wrapper">
          <img class="banner" src="../assets/imgs/banner.avif" alt="Banner principal" />
        </div>
        <div class="image-wrapper">
          <img class="imagem" src="../assets/imgs/image.jpg" alt="Imagem lateral" />
        </div>
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
  justify-content: space-between;
}

.banner-wrapper, .image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 1rem;
}

.imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.banners {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 20px; /* Espaço entre o banner e a imagem lateral */
  height: auto; /* Ajusta a altura automaticamente */
}

.banner-wrapper {
  flex: 2;
  height: auto; /* A altura será definida automaticamente */
}

.image-wrapper {
  flex: 1;
  height: auto; /* A altura será definida automaticamente */
  display: flex;
  align-items: center;
  justify-content: center;
}

.imagem {
  max-height: 100%; /* Garante que a imagem não ultrapasse a altura do contêiner */
  aspect-ratio: 3 / 4; /* Mantém a proporção de 3/4 */
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
