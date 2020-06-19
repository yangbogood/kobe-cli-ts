module.exports = {
  vueTemplate: name => {
      return `
<template>
  <div class="${name.toLowerCase()}">
    {{name}}
  </div>
</template>

<script lang ="ts">
import Vue from 'vue'
import Component  from 'vue-class-component'
@Component({
  name:"${name.toLowerCase()}",
  props:{},
  computed: {},
  watch: {},
})
export default  class ${name} extends Vue{
  name:string = "我是${name}模块";
  created() {}
  mounted() {} 
}
</script>

<style lang="scss">
.${name.toLowerCase()}{
  color:red
}
</style>`
  },
  entryTemplate: name => {
      return `
const route = [{
  path: '/${name.toLowerCase()}',
  meta:'${name.toLowerCase()}',
  component:()=>import('./${name}.vue')
}]
export default route;`
  },
  storeTemplate: name => {
      return `
import Vue from "vue";
import Vuex from "vuex";
  
Vue.use(Vuex);
  
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
  

  `
  }
}