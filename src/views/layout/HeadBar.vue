<template>
    <div class="header-wrapper">

        <div class="nav-bar">
            <div class="menu-icon" @click="collapseMenu">
                <i :class="menuIconClass"></i>
            </div>
            <div class="menu-breadcrumd">
                <breadcrumd></breadcrumd>
            </div>
            <div class="person-info">
                <span>{{ user.nickName }}</span>
                <el-button type="text" @click="logout">退出</el-button>
            </div>
        </div>

        <div class="tags-view">
            <tagsview></tagsview>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Breadcrumd from '@/components/layout/Breadcrumd.vue'
    import Tagsview from '@/components/layout/Tagsview.vue'
    export default {
        name: "HeadBar",
        components: { Breadcrumd, Tagsview },
        computed: {
            ...mapGetters({
                user: 'user',
                isCollapse: 'isCollapse'
            }),
            themeStyle() {
                return {
                    backgroundColor: this.$store.state.setting.themeColor
                }
            }
        },
        data: function() {
            return {
                menuIconClass: ''
            }
        },
        created() {
            this.setMenuClass(this.isCollapse)
        },
        methods: {

            // 设置折叠图标样式
            setMenuClass(isCollapse) {
                isCollapse?this.menuIconClass = 'el-icon el-icon-s-unfold':this.menuIconClass = 'el-icon el-icon-s-fold'
            },

            // 折叠侧边栏
            collapseMenu() {
                this.setMenuClass(!this.isCollapse)
                this.$store.dispatch('setting/setCollapse',!this.isCollapse)
            },

            // 退出
            logout() {
                sessionStorage.removeItem('web-exam-user')
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="scss">

    .header-wrapper {
        width: 100%;
        color: $header-text-color;
    }
    .nav-bar {
        height: 50px;
        position: relative;
        -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        .menu-icon,
        .menu-breadcrumd,
        .person-info {
            height: 100%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .person-info {
            float: right;
            padding: 0 20px;
        }
        .menu-icon {
            padding: 0 15px;
            i {
                width: 20px;
                height: 20px;
                font-size: 20px;
            }
        }
    }
    .tags-view {
        height: 34px;
        border-bottom: 1px solid #d8dce5;
    }
</style>
