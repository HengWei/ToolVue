<template>
    <!--<div class="navbar-header">
        <router-link to="/nav" class="navbar-brand">Simple CRUD Project</router-link>
    </div>--> 
    <div class="home">   
        <h1>Home</h1>
        <!--<el-button typeof="primary" @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>-->
    </div>
</template>

<script>
    export default {
        name: 'Home',        
        data: function () {
            return {
                visible: false
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

