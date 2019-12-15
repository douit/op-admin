<template>
    <el-breadcrumb separator="/" class="breadcrumd-wrapper">
        <el-breadcrumb-item>
            <span>首页</span>
        </el-breadcrumb-item>
        <!--<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
    </el-breadcrumb>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Breadcrumd",
        computed: {
            ...mapGetters({
                dynamicRoutes: 'dynamicRoutes'
            })
        },
        watch: {
          $route: function(newRoute, oldRoute){
              /*if(newRoute !== '/'){
                  this.dynamicRoutes.forEach(item => {
                      if(item.path === path){
                          this.itemName = item.name
                      }
                  })
              }else {
                  this.itemName = null
              }*/
          }
        },
        data: function() {
            return {
                itemName: null
            }
        },
        created(){

        }
    }
</script>

<style scoped>
    .breadcrumd-wrapper {
        height: 50px;
        line-height: 50px;
    }
</style>
