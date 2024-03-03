<template>
  <h3>事件修饰符</h3>
  <a @click.prevent="clickHandle" href="https://www.baidu.com">baidu</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>
<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    clickHandle(e){
      //阻止了默认事件
      //e.preventDefault();
      console.log('click');
    },
    clickDiv(e){
      console.log('div');
    },
    clickP(e){
      //阻止冒泡到父元素
      // e.stopPropagation();
      console.log('p');
    },
  }
}
</script>