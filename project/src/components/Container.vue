<template>
    <div id="container">
        <div class="work_in_progress">
            work in progress
        </div>
        <div class="prod_list">
            <ProductsList/>
        </div>
    </div>
</template>

<script>
import ProductsList from './ProductsList.vue'

export default {
    components: {
        ProductsList
    }
}
</script>


<style>
    .work_in_progress {
        font: bold 10em "Fira Sans", serif;
           }
</style>