<template>
  <modal-window :visible="warningVisible" @close="onDeleteReject">
    <delete-warning-window @submit="onDeleteSubmit" @reject="onDeleteReject"/>
  </modal-window>

  <div class="admin-products-list" v-for="product in products" :key="product.id">
    <admin-product-card class="card" :product="product" @edit="onEdit" @delete="onDelete"/>
  </div>
</template>


<style scoped>
.admin-products-list > .card {
  margin: 4px 0px;
}
</style>


<script lang = 'ts'>
import { defineComponent, ref } from 'vue'
import Product from '@/models/admin/product'
import ProductsRepository from '@/repositories/admin/productsRepository'
import AdminProductCard from './AdminProductCard.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import DeleteWarningWindow from './DeleteWarningWindow.vue'

export default defineComponent({
  name: 'admin-products-list',

  components: {
    AdminProductCard,
    ModalWindow,
    DeleteWarningWindow,
  },

  setup() {
    return {
      productsRepository: new ProductsRepository
    }
  },

  data() {
    return {
      products: [] as Product[],
      page: 0,
      productsToLoad: true,
      loading: false,

      warningVisible: false,
      pendingDelete: null as Product|null,
    };
  },

  mounted() {
    this.loadUp(false)

    window.onscroll = () => {
      this.onScroll()
    }
  },

  methods: {
    onScroll(): void {
      let height = document.documentElement.scrollTop + window.innerHeight
      let bottomOfWindow = height === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadUp(false)
      }
    },

    loadUp(refresh: boolean): void {
      if (refresh) {
        this.loading = false
        this.products = []
        this.page = 0
        this.productsToLoad = true
      }

      if (!this.loading && this.productsToLoad) {
        this.loading = true
        this.productsRepository.getProducts(this.page)
          .then(result => {
            if (this.loading) {
              if (result.length > 0) {
                result.forEach(item => this.products.push(item))
                this.page++
              } else {
                this.productsToLoad = false
              }
              this.loading = false
              this.onScroll()
            }
          })
      }
    },

    onEdit(model: Product): void {
      this.$router.push(`/admin/products/${model.id}`)
    },
    onDelete(model: Product): void {
      this.pendingDelete = model
      this.warningVisible = true
    },
    onDeleteSubmit(): void {
      if (this.pendingDelete !== null) {
        this.productsRepository.deleteProduct(this.pendingDelete.id)
          .then(model => {
            this.warningVisible = false
            this.loadUp(true)
          })
      } else {
        this.warningVisible = false
      }
      this.pendingDelete = null
    },
    onDeleteReject(): void {
      this.pendingDelete = null
      this.warningVisible = false
    },
  },
});
</script>
