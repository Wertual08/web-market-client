<template>
  <div class="delete-warning-window">
    <p class="message"><slot/></p>
    <div class="buttons">
      <action-button class="reject" @click="$emit('close')">Ок</action-button>
    </div>
  </div>
</template>


<style scoped>
.delete-warning-window {
  max-width: 400px;

  background: #192F60;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
}

.delete-warning-window > .message {
  color: white;

  font-weight: normal;

  padding: 0px;
  margin: 16px;
}

.delete-warning-window > .buttons {
  display: flex;
  justify-content: space-between;
}

.delete-warning-window > .buttons > .reject {
  height: 32px;
  width: 64px;

  margin: 16px;
}

.delete-warning-window > .buttons > .submit {
  height: 32px;
  width: 30%;

  margin: 16px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  name: 'info-window',

  components: {
    ModalWindow,
    ActionButton,
  },

  emits: ['close'],
})
</script>
