/*
* @Author: StuBoo3i
* @Date: 2020-09-21 14:10:00
* @LastEditTime: 2020-09-21 14:10:00
* @LastEditors: StuBoo3i
*
*
* @Description:
* 内容改变：{{  content  }}
* 属性改变：v-bind:指令
* 事件：v-on:click /@click
* 没有特别的需求不要操作DOM
*/
<template>
  <h3>模板引用</h3>
  <div ref="container" class="container">{{ content }}</div>
  <input type="text" ref="username">
  <button @click="handleClick">获取元素</button>
</template>
<script>

export default {
  data(){
    return {
      content: "内容",
    }
  },
  methods: {
    handleClick(){
      //innerHTML:原生的JS的属性
      console.log(this.$refs.container.innerHTML = "brouhaha");
      console.log(this.$refs.username.value);
    }
  }
}
</script>