import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modules = {};
const context = require.context('../views', true, /store\/index\.ts/);
console.info(context.keys())
context.keys().forEach(key => {
  modules[key.replace(/^\.\/|\/store\/index\.ts$/g, "")] = {
    namespaced: true,
    ...context(key).default
  };
})



export default new Vuex.Store({

  modules,
})
