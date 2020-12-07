<template>
    <div class="sidebar">
        <Weather />
        <img src="../assets/banner.jpg" alt="" class="banner">
    </div>
</template>

<script>
import Weather from './Weather.vue'
    export default {
    name: 'Sidebar',
    components: {
        Weather
    }
}
</script>

<style lang="scss">
.sidebar{
    padding: 37px 0;
    text-align: left;
}
.banner{
    max-width: 100%;
}
</style>
