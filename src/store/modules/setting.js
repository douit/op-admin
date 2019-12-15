const state = {
  lang: 'zh',
  themeColor: 'rgba(32,43,65,1)',
  isCollapse: false,
}

const mutations = {
  SETLANG(state, lang) {
    state.lang = lang
  },
  SETTHEMECOLOR(state, color) {
    state.themeColor = color
  },
  SETCOLLAPSE(state, isCollapse) {
    state.isCollapse = isCollapse
  },
}

const actions = {
  setLang({ commit }, lang) {
    commit('SETLANG',lang)
  },
  setThemeColor({ commit }, color) {
    commit('SETTHEMECOLOR',color)
  },
  setCollapse({ commit }, isCollapse) {
    commit('SETCOLLAPSE', isCollapse)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}