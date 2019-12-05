<template>
  <div id="app">
    <router-link to="/about">about</router-link>
    <router-link to="/my">my</router-link>
     <router-link to="/comment">comment</router-link>
     <router-link to="/test">test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
      
    };
  },
  methods:{
   
  },
  name: "App",
  template:"<App/>",
 
};
</script>

<style>
.router-link-active{
  color: red;
}
</style>
