<template>
    <div class="wrap">
        <form @submit.prevent="add">
            标题：<input type="text" v-model="title" /><br>
            内容：<textarea v-model="content" cols="40" rows="10"></textarea><br>
            <button>提交</button>
        </form>
        <List />
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"",
            content:""
        }
    },
    props:["addComment"],
    methods:{
        add(){
            const title=this.title.trim();
            const content=this.content.trim();
            if(title=="" || content==""){
                alert("title和content不能为空");
            }
            const comment={title,content}
            this.addComment(comment)
            this.title="";
            this.comment="";
        }
    },
    name:"Add",
    created(){
     
    }
}
</script>
<style scoped>
</style>