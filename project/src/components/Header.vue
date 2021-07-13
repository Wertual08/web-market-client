<template>
    <div>
        <TopInfo/>
        <NavigationBar/>

    </div>
</template>

<script>

    import TopInfo from '@/components/TopInfo.vue'
    import NavigationBar from '@/components/NavigationBar.vue'

    export default {
        components: {
            TopInfo,
            NavigationBar
        }
    }

</script>

<style scopped>
    * {
        margin: 0;
        padding: 0;
    }
</style>