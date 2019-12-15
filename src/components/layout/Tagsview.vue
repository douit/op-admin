<template>
    <div class="tags-view-container">
        <router-link
            v-for="tag in viewTags"
            :key="tag.path"
            :class="isActive(tag)?'active':''"
            :to="{ path: tag.path }"
            class="tags-view-item"
            tag="span"
            @contextmenu.prevent.native="handlerContext(tag, $event)"
        >
            {{ tag.name }}
            <span v-if="viewTags.length > 1" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
        </router-link>
        <ul v-show="visible" class="contextmenu" :style="{left:left+'px',top:top+'px'}">
            <li @click="closeSelectedTag(selectedTag)">关闭</li>
            <li @click="closeOtherTag(selectedTag)">关闭其他</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Tagsview",
        computed: {
            ...mapGetters({
                viewTags: 'viewTags'
            })
        },
        watch: {
            // 路由监听
            $route() {
                this.addTag()
            },
            visible(value) {
                if(value) {
                    document.body.addEventListener('click',this.hideContextTags)
                }else {
                    document.body.removeEventListener('click',this.hideContextTags)
                }
            }
        },
        data: function() {
            return {
                visible: false,
                selectedTag: {},
                left: 0,
                top: 0
            }
        },
        mounted() {
            this.addTag()
        },
        methods: {

            // 添加标签
            addTag() {
                let { path, name } = this.$route
                let flag = false
                if(this.viewTags.length > 0){
                    this.viewTags.forEach(item => {
                        if(item.path === path) {
                            flag = true
                        }
                    })
                }
                if(!flag)
                this.$store.dispatch('tagsview/addTagsview', { path, name })
            },

            // 标签高亮
            isActive(tag) {
                return tag.path === this.$route.path
            },

            // 关闭标签
            closeSelectedTag(tag) {
                if(this.viewTags.length === 1) {
                    this.$message("至少保留一个标签")
                    this.visible = false
                    return
                }
                this.$store.dispatch('tagsview/removeTagsview', tag).then((viewTags) => {
                    if (this.isActive(tag)) {
                        this.toLastView(viewTags, tag)
                    }
                    this.visible = false
                })
            },

            // 关闭高亮的标签时跳转至上一个标签
            toLastView(viewTags) {
                const lastTag = viewTags.slice(-1)[0]
                if (lastTag) {
                    this.$router.push(lastTag.path)
                }
            },

            // 标签右键事件
            handlerContext(tag,e) {
                const menuMinWidth = 105
                const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
                const offsetWidth = this.$el.offsetWidth // container width
                const maxLeft = offsetWidth - menuMinWidth // left boundary
                const left = e.clientX - offsetLeft + 15 // 15: margin right

                if (left > maxLeft) {
                    this.left = maxLeft
                } else {
                    this.left = left
                }

                this.top = e.clientY
                this.visible = true
                this.selectedTag = tag
            },

            // 隐藏右键操作框
            hideContextTags() {
                this.visible = false
            },

            // 关闭其他标签
            closeOtherTag(tag) {
                this.$store.dispatch('tagsview/removeOtherTagsview', tag).then((viewTags) => {
                    if (!this.isActive(tag)) {
                        this.toLastView(viewTags, tag)
                    }
                    this.visible = false
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    $tags-item-bg-color: #fff;
    $tags-item-border: 1px solid #d8dce5;
    $tags-item-text-color: #495060;
    $tags-item-active-bg-color: #42b983;
    $tags-item-active-text-color: #fff;
    $tags-item-active-border-color: #42b983;
    .tags-view-container {
        height: 100%;
        .tags-view-item {
            background-color: $tags-item-bg-color;
            border: $tags-item-border;
            color: $tags-item-text-color;
            float: left;
            padding: 0 8px;
            margin-left: 5px;
            margin-top: 4px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            display: flex;
            align-items: center;
        }
        .tags-view-item:first-child {
            margin-left: 15px;
        }
        .tags-view-item.active {
            background-color: $tags-item-active-bg-color;
            color: $tags-item-active-text-color;
            border-color: $tags-item-active-border-color;
        }

        .tags-view-item.active::before {
            content: "";
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
        }

        .tags-view-item .el-icon-close::before {
            -webkit-transform: scale(.6);
            transform: scale(.6);
            display: inline-block;
        }
        ul.contextmenu {
            margin: 0;
            background: #fff;
            z-index: 3000;
            position: absolute;
            list-style-type: none;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            -webkit-box-shadow: 2px 2px 3px 0 rgba(0,0,0,.3);
            box-shadow: 2px 2px 3px 0 rgba(0,0,0,.3);

            li {
                margin: 0;
                padding: 7px 16px;
                cursor: pointer;
            }
        }
    }

</style>
