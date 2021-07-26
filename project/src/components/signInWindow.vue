<template>
    <div class="page">
 
        <button сlass="show-modal-button" @click="showModal">Показать модальное окно</button>
 
        <modal-window ref="modal"></modal-window>
        
    </div>
 
</template>
 
<script>
    import ModalWindow from 'modal-window.vue'
 
    export default {
        name: 'App',
        components: {
            ModalWindow
        },
        methods: {
            showModal: function () {
                this.$refs.modal.show = true
            }
        },
    }
</script>
 
<style lang="scss">
    body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
    }
 
    .page {
        position: relative;
        width: 100%;
        min-height: 100%;
    }
</style>