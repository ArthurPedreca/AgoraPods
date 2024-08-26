<template>
  <div class="login">
    <span>Entrar /</span>
    <span>Cadastre-se</span>
  </div>
</template>

<style scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    margin-left: 10px;
}

.login span{
    margin-left: 5px;
    font-size: .9rem;
    font-family: Montserrat;
    font-weight: 600;
    cursor: pointer;
    color: var(--text-color);
}

.login span:hover{
    transition: .5s;
    font-size: .95rem;
    color: black;
}
</style>
