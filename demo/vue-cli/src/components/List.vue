<template>
    <div class="wrap">
        <ul>
           <Item :comments="comments" />
        </ul>
    </div>
</template>
<script>
import Item from '../components/Item';
export default {
    data(){
        return{
            
        }
    },
    props:["comments"],
     
    methods:{
    
    },
    components:{
        Item
    },
    name:"List",
    created(){
     
    }
}
</script>
<style scoped>
</style>