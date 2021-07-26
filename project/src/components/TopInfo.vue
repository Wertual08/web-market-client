<template>
    <div id="topInfo">
        <div id="logo" class="topBlock">
            <img src="../assets/logo.png" alt="vue logo">
        </div>
        <div id="contacts" class="topBlock">
            <a href="tel:+89165782648">8 (916) 578-26-48</a>
            <p>
                email@mail.com
            </p>
        </div>
        <div id="cart" class="topBlock">
            Корзина
        </div>
        <div id="login" class="topBlock">
            <NotSignedLoginPanel/>
        </div>
    </div>
</template>

<script>
    import NotSignedLoginPanel from '@/components/NotSignedLoginPanel.vue'

    export default {
        components: {
            NotSignedLoginPanel
        }
    }
</script>

<style scoped>
    #topInfo {
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .topBlock {
        height: 60px;
        padding: 0px 20px;
    } 

    img {
        width: 50px;
        height: 50px;
    }    
</style>