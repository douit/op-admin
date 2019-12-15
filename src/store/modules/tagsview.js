const state = {
    viewTags: [],
}

const mutations = {
    ADDVIEWTAGS(state, tag) {
        state.viewTags.push(tag)
    },
    REMOVEVIEWTAGS(state, tag) {
        state.viewTags.forEach((item,i) => {
            if(item.path === tag.path){
                state.viewTags.splice(i,1)
            }
        })
    },
    REMOVEOTHERVIEWTAGS(state, tag) {
        state.viewTags = []
        state.viewTags.push(tag)
    }
}

const actions = {
    addTagsview({ commit }, tag) {
        commit('ADDVIEWTAGS', tag)
    },
    removeTagsview({ commit, state }, tag) {
        return new Promise(resolve => {
            commit('REMOVEVIEWTAGS',tag)
            resolve(state.viewTags)
        })

    },
    removeOtherTagsview({ commit }, tag) {
        return new Promise(resolve => {
            commit('REMOVEOTHERVIEWTAGS', tag)
            resolve(state.viewTags)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
