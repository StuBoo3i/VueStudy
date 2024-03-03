<template>
  <p :class="{'active':isActive,'text-danger':HasError}">Class样式绑定</p>
  <p :class="classObject">Class样式绑定</p>
  <p :class="[arrActive,arrHasError]">Class样式绑定</p>
  <p :class="[isActive?'active':'']">Class样式绑定</p>
  <p :class="[isActive?'active':'',{'active':isActive}]">Class样式绑定</p>
</template>
<script>

export default {
  data(){
    return{
      myClass: "demo",
      isActive: true,
      HasError: true,
      classObject: {
        "active": true,
        "text-danger": true
      },
      arrActive: "active",
      arrHasError: "text-danger"
    }
  }
}
</script>
<style>
.active{
  color: green;
  font-size: 20px;
}
.text-danger{
  color: red;
  font-size: 20px;
}
</style>