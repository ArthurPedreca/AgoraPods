<script setup>
import Card from "../components/Cards.vue";
import imageSrc from "../assets/imgs/card.png";
import CardProduto from "../components/CardProduto.vue";
</script>

<template>
  <section>
    <div class="banners">
      <img class="banner" src="../assets/imgs/banner.avif" alt="Banner principal" />
    </div>
    <div class="cards">
      <Card backgroundColor="Roxo" text="Descartáveis" :imageSrc="imageSrc" />
      <Card backgroundColor="Laranja" text="FreeBase" :imageSrc="imageSrc" />
      <Card backgroundColor="Vermelho" text="Descartáveis" :imageSrc="imageSrc" />
      <Card backgroundColor="Laranja" text="Descartáveis" :imageSrc="imageSrc" />
      <Card backgroundColor="Verde" text="Descartáveis" :imageSrc="imageSrc" />
    </div>
  </section>

  <div class="produtos">
    <img class="frame" src="../assets/imgs/frame.jpg" alt="">

    



      <div class="cards_produtos">
      <CardProduto class="card" title="Nicsalt Ignite Subzero 35mg 30ml" originalPrice="R$ 99,90"
        installment="3x de R$ 33,30 s/ juros" pixPrice="R$ 89,91 no pix"
        imageSrc="https://lojapodvape.com/wp-content/uploads/2024/08/Nicsalt-Ignite-30ml-174x178.jpg" />
      <CardProduto class="card" title="Nicsalt Ignite Subzero 35mg 30ml" originalPrice="R$ 99,90"
        installment="3x de R$ 33,30 s/ juros" pixPrice="R$ 89,91 no pix"
        imageSrc="https://lojapodvape.com/wp-content/uploads/2024/08/Nicsalt-Ignite-30ml-174x178.jpg" />
      <CardProduto class="card" title="Nicsalt Ignite Subzero 35mg 30ml" originalPrice="R$ 99,90"
        installment="3x de R$ 33,30 s/ juros" pixPrice="R$ 89,91 no pix"
        imageSrc="https://lojapodvape.com/wp-content/uploads/2024/08/Nicsalt-Ignite-30ml-174x178.jpg" />
        <CardProduto class="card" title="Nicsalt Ignite Subzero 35mg 30ml" originalPrice="R$ 99,90"
        installment="3x de R$ 33,30 s/ juros" pixPrice="R$ 89,91 no pix"
        imageSrc="https://lojapodvape.com/wp-content/uploads/2024/08/Nicsalt-Ignite-30ml-174x178.jpg" />

      
    </div>

  </div>


</template>

<style>
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.frame {
  margin-top: 16px;
}
.produtos {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.cards_produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 25px;
  justify-items: center; 
  width: 100%;
  max-width: 1200px; 
}

.produtos img {
  width: 250px;
  height: 300px;
  aspect-ratio: 3 / 4;
}


.banner-wrapper,
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner {
  width: 100%;
  height: auto;
  aspect-ratio: 27 / 9;
  aspect-ratio: 27 / 9;
  object-fit: cover;
  border-radius: .5rem;
}

.imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.banners {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
  /* Espaço entre o banner e a imagem lateral */
  height: auto;
  /* Ajusta a altura automaticamente */
}

.banner-wrapper {
  flex: 2;
  height: auto;
  /* A altura será definida automaticamente */
}

.image-wrapper {
  flex: 1;
  height: auto;
  /* A altura será definida automaticamente */
  display: flex;
  align-items: center;
  justify-content: center;
}

.imagem {
  max-height: 100%;
  /* Garante que a imagem não ultrapasse a altura do contêiner */
  aspect-ratio: 3 / 4;
  /* Mantém a proporção de 3/4 */
}

section {
  max-width: 1200px;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

@media screen and (max-width : 1100px) {
  .produtos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


}
</style>
