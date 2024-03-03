<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="UpdateHandle">Update</button>
</template>
<script>

export default {
  data(){
    return {
      message: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    UpdateHandle(){
      this.message = 'Welcome to Vue3'
    }
  },
  watch:{
    message(newVal,oldVal){
      console.log(newVal,oldVal)
    }
  }
}
</script>
<style>

</style>