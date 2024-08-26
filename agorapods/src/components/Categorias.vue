<template>
  <div class="categorias">
    <div>
      <LojaIcone />
      <h2>Loja</h2>
    </div>
    <div>
      <VapeIcone />
      <h2>Vaporizadores</h2>
    </div>
    <div>
      <DescartaveisIcones />
      <h2>Descartáveis</h2>
    </div>
    <div>
      <Freebase />
      <h2>FreeBase</h2>
    </div>
    <div>
      <Acessorios />
      <h2>Acessórios</h2>
    </div>
  </div>
</template>

<script setup>
import LojaIcone from "./icons/LojaIcone.vue";
import VapeIcone from "./icons/VapeIcone.vue";
import DescartaveisIcones from "./icons/DescartaveisIcone.vue";
import Freebase from "./icons/Freebase.vue";
import Acessorios from "./icons/Acessorios.vue";
</script>

<style scoped>
.categorias {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    width: 70%; 
    margin: 0 auto;
    margin-top: 30px;
  }
  
  .categorias div {
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    color: var(--text-color);
  }

  .categorias div h2:hover{
    transition: 0.3s;
    font-size: 1.1rem;
    color: black;
  }
  

.categorias div h2 {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 15px;
}

@media screen and (max-width:1100px) {
  .categorias{
    display: none;
  }
  
}
</style>
