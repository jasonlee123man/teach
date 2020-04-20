<template>
  <div>
    <button
      v-on:click="handleStop"
      size="mini"
      type="primary"
    >停止</button>
    <div>
      <text v-show="isShow">我是内容</text>
    </div>
    <div v-html="content"></div>
    <div v-text="content"></div>
    <input type="text" v-model="username" style="border:1px solid #000;"/>
    {{username}}
    姓：<input type="text" v-model="firstname" />
    名：<input type="text" v-model="lastname" />
    <!-- {{fullname}} -->
    fullname2:{{fullname2}}

  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      content:"<navigator style='color:red;' url='/pages/index/main'>百度</navigator>",
      username:"",
      firstname:"",
      lastname:"",
      fullname2:""
    };
  },
  created() {},
  computed:{
      fullname(){
          return this.firstname+' '+this.lastname;
      }
  },
  watch:{
      firstname:function(newVal,oldVal){
          this.fullname2=newVal+oldVal
      }
  },
  methods: {
    handleStop: function() {
        this.$destroy()
      clearInterval(this.timer);
    }
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
      console.log("mounted()")
    // this.timer = setInterval(() => {
    //   this.isShow = !this.isShow;
    //   console.log("---")
    // }, 1000);
  },
  beforeUpdate () {
      console.log("beforeUpdate ()")
  },
  updated() {
      console.log("updated()")
  },
  beforeDestroy () {
      console.log("beforeDestroy()")
  },
  destroyed () {
    console.log("destroyed()")
  },
  
};
</script>

<style scoped>
input{
    border:1px solid #ccc;
    border-radius: 5px;
}
</style>
