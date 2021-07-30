<template>
    <div id = 'register'>
        <p id="sign-in">
            <button сlass="show-modal-button" @click="showModal">Войти</button>
            <modal-window ref="modal"></modal-window>

        </p>
        <p id="sign-up">
            <button  @click ="Registered" >Регистрация</button>
        </p>
    </div>
    
</template>

<script>
    
    import ModalWindow from '@/components/ModalWindow.vue'
    export default {
        components: {
            ModalWindow,
        },
        methods: {
            showModal: function () {
                this.$refs.modal.closed = () => {
                    this.Registered()
                }
                this.$refs.modal.show = true
            },
            Registered: function(){
                if(this.$refs.modal.Flag) {
                    document.getElementById("register").innerHTML = this.$refs.modal.message_user
                    console.log(1)
                }
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
