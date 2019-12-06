<template>
  <div class="wrap">
    <Add :addComment="addComment" />
    <List :comments="comments" />
  </div>
</template>
<script>
import Add from "../components/Add";
import List from "../components/List";

export default {
  data() {
    return {
      comments: [
        { title: "第一条", content: "我是第一条评论的内容" },
        { title: "第二条", content: "我是第二条评论的内容" },
        { title: "第三条", content: "我是第三条评论的内容" },
        { title: "第四条", content: "我是第四条评论的内容" }
      ]
    };
  },

  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    }
  },

  created() {},
  components: { Add, List }
};
</script>
<style scoped>
</style>