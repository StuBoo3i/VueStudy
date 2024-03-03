<template>
  <h3>条件渲染</h3>
  <div v-if = "flag" >你能看见我吗</div>
  <div v-else >那你还是看啊看我吧</div>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <div v-show="flag">show</div>
</template>
<script>

export default{
  data(){
    return{
      flag:true,
      type: "D"
    }
  }
}
</script>
<style scoped>

</style>