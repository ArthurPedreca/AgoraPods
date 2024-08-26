<script setup>
import Categorias from './Categorias.vue';
import CarrinhoIcon from './icons/carrinhoIcone.vue'
import LoginButton from './LoginButton.vue';
import menuIcone from './icons/menuIcone.vue'
import pesquisaIcone from './icons/pesquisaIcone.vue'
import UserIcone from './icons/userIcone.vue';
</script>

<template>
    <div class="header">
        <div class="sobre">
            <span>Quem Somos</span>
            <span>Garantia</span>
            <span>Pedidos</span>
        </div>
        <h6>Frete Grátis a partir de R$300 para todo o Brasil!</h6>   
    </div>

    <div class="search">
        <menuIcone class="menu"/>
        <pesquisaIcone class="pesquisa"/>
        <img src="../assets/imgs/logo(temporaria).png" alt="">
        <UserIcone class="user"/>
        <CarrinhoIcon class="carrinho"/>
        <input type="text" placeholder="Pesquisar...">
        <CarrinhoIcon/>
        <LoginButton/>
    </div>

    <Categorias/>
</template>

<style scoped>
.menu,.pesquisa,.carrinho,.user{
    display: none;
}
.header{
    display: flex;
    flex-direction:row ;
    align-items: center;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px !important;
    margin: 0 auto;
}

.header h6{
    color:var(--text-color);
    font-size: 1.0rem;
    text-align: center;
}


.sobre{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sobre span{
    margin-right: 1.5rem;
}
.search img{
    width: 250px;
}
.search input{
    width: 75%;
    margin-left:35px ;
    margin-right:35px ;
    border: none;
    background-color: rgba(128, 128, 128, 0.13);
    height: 30px;
    border-radius: .3rem;
    padding-left: 10px;
    font-family: Montserrat;
}

.carrinho{
    cursor: pointer;
}
.search input:focus{

    outline: 2px solid rgba(128, 128, 128, 0.342);
}

.search{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
}

@media screen and ( max-width:1100px ) {
    .sobre{
        display: none;
    }
    .header{
        display: flex;
        justify-content: center;
    }

    .search {
        justify-content: center; 
    }

    .search input{
        display: none;
    }
    
    .search img{
        width: 15%;
        margin-left: auto; 
        margin-right: auto; 
    }

    .search > *:not(img) {
        display: none; /* Esconde todos os elementos, exceto a imagem */
    }


    .menu, .pesquisa{
        display:block !important;
        cursor: pointer;
    }

    .menu{
        margin-right: 15px;
    }

    .carrinho{
        display: block !important;
    }

    .user{
        display: block !important;
        margin-right: 15px;
    }
    
}

@media screen and (max-width:850px) {
    .search img{
        width: 124px;
        height: 15px;
    }

    .header h6{
        font-size: 0.7rem;
    }
}

</style>