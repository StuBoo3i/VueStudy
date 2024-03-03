<template>
  <h3>表单输入绑定</h3>
  <form>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <input type="text" v-model.lazy="message2">
    <p>{{ message2 }}</p>
  </form>
</template>
<script>

export default {
  data(){
    return {
      message:"",
      checked:true,
      message2:""
    }
  },
}
</script>