<template>    
    <div id="app">
        <Nav />
        <router-view style="margin:20px"></router-view>
    </div>
</template>

<script>
    import Nav from './components/Nav.vue';

    export default {
        name: 'app',
        components: {
            Nav
        }
    };
</script>

<style>
    
</style>

