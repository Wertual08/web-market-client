<template>
  <div class="delete-warning-window">
    <p class="message">
      Вы уверены, что хотите удалить товар "{{ name }}: {{ id }}"?
      Это действие необратимо.
    </p>
    <div class="buttons">
      <action-button class="reject" @click="$emit('reject')">Отмена</action-button>
      <action-button class="submit" @click="$emit('submit')">Удалить</action-button>
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
  width: 70%;

  margin: 16px;
}

.delete-warning-window > .buttons > .submit {
  height: 32px;
  width: 30%;

  margin: 16px;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import Product from '@/models/admin/product'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  name: 'delete-warning-window',

  components: {
    ModalWindow,
    ActionButton,
  },

  emits: ['submit', 'reject'],

  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },

  computed: {
    id(): string {
      return this.product?.id.toString() ?? ''
    },

    name(): string {
      return this.product?.name ?? ''
    },
  }
})
</script>
