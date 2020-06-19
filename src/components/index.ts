import Vue from 'vue';

const context = require.context('./global', true, /index\.vue/);

context.keys().forEach(url => {
  const component = context(url).default;
  console.info(component.name)
  Vue.component(component.name,component)
})