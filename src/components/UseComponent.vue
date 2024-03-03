<template>
  <h3>组件的生命周期应用</h3>
  <p ref="name">Component APP</p>
  <ul>
    <li v-for="(item, index) in banner" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </li>
  </ul>
</template>
<script>

export default {
  created() {

  },
  beforeMount() {
    console.log('beforeMount');
    // this.$refs.name.style.color ='green';
  },
  mounted() {
    console.log('mounted');
    this.$refs.name.style.color ='red';
    this.banner = [
      {
        title: '爱尔兰',
        content: '爱尔兰(爱尔兰语:Poblacht na héireann;英语:Republic oflreland),是一个西欧的议会共和制国家，西临大西洋，东靠爱尔兰海，与英国隔海相望，是北美通向欧洲的通道'
      },
      {
        title: '德国',
        content: '德国(德国语:Deutschland;英语:Republic of Germany),是欧洲国家首都，是欧洲国家首都，是欧洲国家首都，是欧洲国家首都，是欧洲国家首都，是欧洲国家首都，是欧洲国家首都，是欧洲国家首都'
      }
    ]
  },
  data() {
    return {
      banner: []
    }
  },
  components: {

  },
  methods: {

  }
}
</script>
<style scoped>

</style>