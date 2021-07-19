import Vue from "vue";
import vuex from 'vuex';
Vue.use(vuex);

export default new vuex.Store({
    state:{
        themeType : 'default'
    },
    mutations:{
        changeThemeType(state,themeColor){
            state.themeType = themeColor;
            window.document.documentElement.setAttribute('data-theme', themeColor);
        }
    }
})