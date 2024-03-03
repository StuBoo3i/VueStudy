<template>
  <h3>内联事件处理器</h3>
  <button @click="addCount('hello')">Add</button>
  <p>{{count}}</p>
</template>
<script>

export default {
  data(){
    return{
      count:0
    }
  },
  methods:{
    //event对象
    addCount(msg){
      //vue中的event对象就是JS中的原生event对象
      console.log(msg);
      this.count++
    }
  }
}
</script>
<style>

</style>