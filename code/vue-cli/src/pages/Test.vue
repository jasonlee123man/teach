<template>
    <div class="wrap">
        <div class="outer" @mouseenter="myEnter" :style="{background:bgColor}">
            outer
            <div class="inner">
                inner
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bgColor:"orange"
        }
    },
     
    methods:{
        myEnter(){
            console.log("enter")
            this.bgColor="red"
        }
    },
     
    created(){
     
    }
}
</script>
<style scoped>
.outer{
    width: 200px;
    height: 200px;
    background: red;
    color: white;
}
.inner{
    width: 100px;
    height: 100px;
    background: blue;
    color: white;
}
</style>