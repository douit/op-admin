<template>
    <el-scrollbar :style="bgColor" class="side_wrapper">
        <div class="side_title">
            <p></p>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-vertical"
                 :background-color="themeColor" :collapse-transition="false"
                 @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <menu-item v-for="menu in menuList" :key="menu.id" :menu="menu"></menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    import { mapGetters } from 'vuex'
    import MenuItem from '@/components/layout/MenuItem.vue'
    export default {
        name: "SideBar",
        components: { MenuItem },
        computed: {
            ...mapGetters({
                isCollapse: 'isCollapse',
                menuList: 'menuList',
                themeColor: 'themeColor'
            }),
            bgColor() {
                return {
                    backgroundColor: this.$store.getters.themeColor,
                    height: '100%'
                }
            }
        },
        data: function() {
            return {
                activeIndex: '1'
            }
        },
        created() {
            this.setActiveIndex()
        },
        watch: {
            // 路由监听
            $route() {
                this.setActiveIndex()
            }
        },
        methods: {

            // 设置 高亮菜单
            setActiveIndex() {
                this.activeIndex = '' + this.$route.meta.index
            },

            handleOpen() {},

            handleClose() {}
        }
    }
</script>

<style scoped lang="scss">
    $el-side-text-color: #fff;
    .side_wrapper {
        color: $el-side-text-color;
        .el-scrollbar__wrap{
            overflow-x: hidden;
        }
        .side_title {
            height: 50px;
            line-height: 50px;
            font-size: 22px;
        }
    }

    .el-menu {
        border-right: none;
        background-color: rgba(48,65,86,1);
        .el-submenu__title,
        .el-submenu__title i,
        .el-menu-item,
        .el-menu-item i {
            color: rgb(191, 203, 217);
        }
        .el-menu-item,
        .el-submenu__title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .el-menu-item.is-active {
            color: #409EFF;
        }
        .el-menu-item:hover,
        .el-submenu__title:hover {
            background-color: #263445!important;
        }
        .el-menu-item:active,
        .el-menu-item:focus,
        .el-menu-item:visited {
            color: rgb(64, 158, 255);
            background-color: #263445!important;
        }
        .el-submenu__icon-arrow {
            color: #909399;
        }
        .el-submenu {
            .el-menu-item {
                background-color: #1f2d3d!important;
            }
            .el-menu-item:hover {
                background-color: #001528!important;;
            }
        }
    }
</style>
