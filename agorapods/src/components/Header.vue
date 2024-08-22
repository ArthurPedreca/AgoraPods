<script setup>

</script>

<template>
    <div class="header">
        <div class="sidebar">
            <span>Quem Somos</span>
            <span>Garantia</span>
            <span>Pedidos</span>
        </div>
        <h6>Frete Grátis a partir de R$300 para todo o Brasil!</h6>
        
    </div>
</template>

<style scoped>
.header{
    display: flex;
    flex-direction:row ;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'Montserrat', sans-serif;
}
.header h6{
    color:var(--text-color);
    margin: 5px;
    font-size: 1.0rem;
}


.sidebar{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sidebar span{
    margin-left: 1.5rem;
}

@media screen  {
    
}
</style>