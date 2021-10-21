<template>
  <div class="new-order-view">
    <order-details-form class="content"/>
  </div>
</template>


<style scoped>
.new-order-view {
  background: #192F60;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  color: white;
}

.new-order-view > .content {
  width: 90%;
}
</style>


<script lang="ts">
import OrderDetailsForm from '@/components/orderDetails/OrderDetailsForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { OrderDetailsForm },
  name: 'new-order-view',

  setup() {
        
  },
})
</script>