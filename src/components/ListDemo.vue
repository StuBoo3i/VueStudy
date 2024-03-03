<template>
  <h3>列表渲染</h3>
  <p v-for="(item,index) in names">{{ item }}-{{ index}}</p>
  <div v-for="item of result">
    <p>{{ item.title }}</p>
    <img :src="item.avator">
  </div>
  <div>
    <p v-for="(value,key,index) of userInFo">{{ key }}-{{ value }}-{{ index }}</p>
  </div>
</template>
<script>

export default {
  data() {
    return {
      names:["JavaScript", "HTML", "CSS", "IT", "LIST"],
      result:[
          {
            "id":2261677,
            "title": "鄂尔多斯|感受一座城市的璀璨夜景感受一座城市，除了白日里的车水马龙，喧嚣繁华之",
            "avator":"https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451",
          },
          {
          "id":2261566,
          "title":"成都这家洞穴暗黑风咖啡厅酷毙了!!早c晚A走起成都天气这么热咖啡*人必",
          "avator":"https://pic.qyer.com/avatar/011/07/08/69/200?v=1572185180",
          },
          {
          "id":2261662,
            "title":"【川西新龙-措卡湖】措卡湖，意为“乱石丛中的黑色海水，神秘小众原汁原味。深",
          "avator":"https://pic.qyer.com/avatar/009/88/48/58/200?v=1507386782",
          },
        ],
      userInFo:{
        name: "John",
        age: 18,
        address: "上海市普陀区金沙江路 1518 弄",
        date: "2016-05-02",
        desc: "我是描述信息",
        sex: "男",
      }
  }
  }
}
</script>
<style>

</style>