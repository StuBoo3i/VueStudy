<template>
  <div :id="dynamicID" :class="msg" :title="dynamicTitle">测试</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">测试</div>
</template>
<script>

export default {
  data(){
    return{
      msg:"active",
      dynamicID:"appID",
      dynamicTitle:null,
      isButtonDisabled:false,
      objectOfAttrs:{
        class:"active",
        id:"appID",
      }
    }
  }
}
</script>
<style>
.active{
  color: red;
  font-size: 30px;
}
</style>
