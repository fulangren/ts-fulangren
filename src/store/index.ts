import Vue from 'vue';
import Vuex from 'vuex';
import Two from './TestTwo/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Two,
  },
});
