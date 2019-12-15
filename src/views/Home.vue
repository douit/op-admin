<template>
  <el-container class="home" :class="isCollapse?'hide_side':'show_side'">
    <el-aside>
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header height="auto">
        <header-bar></header-bar>
      </el-header>
      <el-main>
        <main-container></main-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeaderBar from './layout/HeadBar.vue'
  import SideBar from './layout/SideBar.vue'
  import MainContainer from './layout/MainContainer'
  export default {
    name: "Home",
    components: {
      HeaderBar,
      SideBar,
      MainContainer
    },
    computed: {
      ...mapGetters({
        isCollapse: 'isCollapse',
      }),
    },
    methods: {
    }
  }
</script>

<style scope lang="scss">
  .el-container{
    height: 100%;
    .el-header{
      padding: 0;
    }
    .el-aside {
      transition: width .28s;
      width: 210px!important;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .el-container {
      transition: margin-left .28s;
      position: relative;
      margin-left: 210px;
      .el-main {
        text-align: center;
      }
    }
  }
  .el-container.hide_side {
    .el-aside {
      width: 54px!important;
    }
    .el-container {
      margin-left: 54px;
    }
  }
</style>
