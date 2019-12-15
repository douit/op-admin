const getters = {
  isCollapse: state => state.setting.isCollapse,
  lang: state => state.setting.lang,
  themeColor: state => state.setting.themeColor,
  user: state => state.user.user,
  viewTags: state => state.tagsview.viewTags,
  menuList: state => state.menu.menuList,
  dynamicRoutes: state => state.menu.dynamicRoutes,
}

export default getters
