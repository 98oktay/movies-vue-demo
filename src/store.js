import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const state = {
    theme: 'default',
    typeFilter: null,
    orderBy: "desc",
    page: 1,
    pageLimit: 5,
    pageTotal: 0,
    user: {}
};


Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});
const mutations = {
    setTheme(state, value) {
        state.theme = value
    },
    set(state, [variable, value]) {
        state[variable] = value
    }
};

export default new Vuex.Store({
    state,
    mutations,
    plugins: [vuexLocal.plugin]
})
