
<template>
  <div class="user">
    {{name}}
  </div>
</template>

<script lang ="ts">
import Vue from 'vue'
import Component  from 'vue-class-component'
@Component({
  name:"user",
  props:{},
  computed: {},
  watch: {},
})
export default  class User extends Vue{
  name = "我是User模块";
  created() {
   console.info(this.name) 
  }
}
</script>

<style lang="scss">
.user{
  color:red
}
</style>