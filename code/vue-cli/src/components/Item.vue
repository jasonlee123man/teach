<template>
  <div class="wrap">
    <li v-for="(item,index) of comments">
      <p>{{item.title}}</p>
      <p>{{item.content}}</p>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:["comments"],

  methods: {},

  created() {}
};
</script>
<style scoped>
li{
    border-bottom: 1px solid #ccc;
}
</style>