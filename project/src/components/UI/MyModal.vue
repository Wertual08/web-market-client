<template>
    <div class="modal" v-if="show" @click.stop="hideModal">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'my-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>