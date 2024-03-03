<template>
  <h3>Component Event</h3>
  <Child @submit-data="GetHandler"/>
  <p>父元素：{{ message }}</p>
</template>
<script>
import Child from "@/Event/Child.vue";
  export default {
    data(){
      return{
        message:"",
      }
    },
    components:{
      Child,
    },
    methods:{
      GetHandler(data){
        console.log("data",data);
        this.message = data;
      }
    }
  }
</script>
