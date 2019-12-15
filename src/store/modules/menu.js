const state = {
    menuList: [],
    dynamicRoutes: []
}

const mutations = {
    SET_MENULIST: (state,menuList) => {
        state.menuList = menuList
    },
    SET_DYNAMICROUTES: (state,dynamicRoutes) => {
        state.dynamicRoutes = dynamicRoutes
    }
}

const actions = {
    setMenuList({commit},menuList){
        commit('SET_MENULIST',menuList)
    },
    setDynamicRoutes({commit},dynamicRoutes){
        commit('SET_DYNAMICROUTES',dynamicRoutes)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
