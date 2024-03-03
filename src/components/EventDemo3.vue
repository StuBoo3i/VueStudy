<template>
  <h3>内联事件处理器</h3>
  <button @click="addCount">Add</button>
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
    addCount(e){
      //vue中的event对象就是JS中的原生event对象
      console.log(e.target.innerHTML="Add"+this.count);
      this.count++
    }
  }
}
</script>
<style>

</style>