<template>
    <div>
        <p id="sign-in">
            <button сlass="show-modal-button" @click="showModal">Войти</button>
            <modal-window ref="modal"></modal-window>
        </p>
        <p id="sign-up">
            <button>Регистрация</button>
        </p>
    </div>
</template>

<script>
    import ModalWindow from '@/components/ModalWindow.vue'

    export default {
        components: {
            ModalWindow
        },
        methods: {
            showModal: function () {
                this.$refs.modal.show = true
            }
        }
    }
</script>

<style scoped>
    #sign-in {
        display: inline-block;
    }

    #sign-up {
        display: inline-block;
    }   
</style>
