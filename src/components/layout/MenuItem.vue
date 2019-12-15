<template>
    <el-submenu v-if="menu.children && menu.children.length > 0" :index="'' + menu.id">
        <template slot="title">
            <i :class="menu.permissionIcon"></i>
            <span slot="title">{{ menu.permissionName }}</span>
        </template>
        <menu-item v-for="(item,i) in menu.children" :menu="item" :key="i"></menu-item>
    </el-submenu>
    <el-menu-item v-else :index="'' + menu.id" @click="handleRoute(menu)">
        <i :class="menu.permissionIcon"></i>
        <span slot="title">{{ menu.permissionName }}</span>
    </el-menu-item>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            menu: Object
        },
        methods: {
            handleRoute (menu) {
                if(this.$route.path !== menu.permissionUrl)
                // 通过菜单URL跳转至指定路由
                this.$router.push(menu.permissionUrl)
            }
        }
    }
</script>

<style scoped>

</style>
