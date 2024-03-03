<template>
  <h3>数组变化侦听</h3>
  <button @click="add">添加</button>
  <ul>
    <li v-for="(item,index) of names" :key="index">{{ item }}</li>
  </ul>
  <button @click="NumsConcat">concat</button>
  <h3>numbers1</h3>
  <ul>
    <li v-for="(item,index) of nums1" :key="index">{{ item }}</li>
  </ul>
  <h3>numbers2</h3>
  <ul>
    <li v-for="(item,index) of nums2" :key="index">{{ item }}</li>
  </ul>
</template>

<script>

export default{
  data(){
    return{
      names:["xlsx","ylsx","zlsx"],
      nums1:[1,2,3,4,5,6,7,8],
      nums2:[9,10,11,12,13,14,15,16]
    }
  },
  methods:{
    add(){
      //引起UI自动更新的方法
      // this.names.push("sakura")
      //不会引起UI自动更新
      // this.names.concat(["sakura"])
      //手动更新原数组引起UI更新
      this.names = this.names.concat(["sakura"])
    },
    NumsConcat(){
      this.nums1 = this.nums1.concat(this.nums2)
    }
  }
}
</script>
