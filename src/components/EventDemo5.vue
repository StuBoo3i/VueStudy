<template>
  <h3>事件传参</h3>
  <p @click="getNameHandler(item,$event)" v-for="(item,index) of names" :key="index">{{ item }}</p>
</template>
<script>

export default {
  data(){
    return{
      names:["a", "b", "c", "d", "e"]
    }
  },
  methods:{
    getNameHandler(name,e){
      console.log(name);
      console.log(e);
    }
  }
}
</script>
<style>

</style>