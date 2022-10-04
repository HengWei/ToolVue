<template>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
        <el-menu-item index="1">
            <router-link to="/index">NK小工具</router-link>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">
                船務
            </template>
            <el-menu-item index="2-1"><router-link to="/upload">Packing 自動序號編輯工具</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>IT</el-menu-item>
        <el-submenu index="4">
            <template slot="title">
                管理部
            </template>
            <el-menu-item index="4-1"><router-link to="/NewProductName">新增品名工具</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
                業務
            </template>
            <el-menu-item index="5-1"><router-link to="/FindModel">料號對應車型比對工具</router-link></el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>  
    export default {
        data() {
            return {
                activeIndex: '1'               
            };
        }
    }
</script>
    
<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    }
</style>