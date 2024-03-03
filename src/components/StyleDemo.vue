<template>
  <p :style="{color:activeColor,fontSize:fontSize+'px'}">Style绑定</p>
  <p :style="styleObject">Style绑定</p>
  <p :style="[styleObject]">Style绑定</p>
</template>
<script>

export default {
  data(){
    return {
      activeColor:"green",
      fontSize:30,
      styleObject: {
        color: "red",
        fontSize: "30px"
      }
    }
  }
}
</script>
<style>

</style>