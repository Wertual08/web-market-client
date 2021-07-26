<template>
    <div id="header">
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

<style scoped>
    #header {
        background-color: lightcyan;
        padding: 8px 60px;
    }
</style>