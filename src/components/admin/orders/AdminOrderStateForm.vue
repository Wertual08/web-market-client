<template>
  <div class="admin-order-state-form">
    Новый статус:
    <select v-model="selectedState">
      <option value="Requested">В обработке</option>
      <option value="Accepted">Принят</option>
      <option value="Processed">Обработан</option>
      <option value="Sent">Отправлен</option>
      <option value="Completed">Выполнен</option>
      <option value="Canceled">Отменен</option>
    </select>
    <action-button class="apply-button" v-if="selectedState !== state" @click="$emit('apply', selectedState)">
      Применить
    </action-button>
  </div>
</template>


<style scoped>
.admin-order-state-form {
  color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.admin-order-state-form > select {
  width: 150px;
  height: 32px;

  padding: 0 8px;
  margin: 0 16px;

  background: #00174A;
  color: white;

  border: none;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
}

.admin-order-state-form > .apply-button {
  width: 150px;
  height: 32px;
}
</style>


<script lang="ts">
import ActionButton from '@/components/common/ActionButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ActionButton },
  name: 'admin-order-state-form',

  emits: ['apply'],

  props: {
    state: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selectedState: this.state,
    }
  },

  watch: {
    state(payload: string) {
      this.selectedState = payload
    }
  },
})
</script>
