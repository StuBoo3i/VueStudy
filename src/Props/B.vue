<template>
  <h3>B</h3>
  <p>{{ title }}</p>
</template>
<script>

export default {
  data(){
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    //数字和字符串可以直接default，但是如果是数组和对象，必须通过工厂函数返回默认值
    // names :
    // type: Array,
    // default(){
    //   return [""]
    // },
    title: {
      type: [String,Number,],
      default: 'Welcome',
      //必选项，不传报警告
      required: true
    }
  }
}
</script>