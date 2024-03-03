<template>
  <h3>{{ object.name }}</h3>
  <p>{{ isLogin}}</p>
  <p>{{ isLogins()}}</p>
</template>
<script>

export default {
  data(){
    return {
      object: {
        name: 'sakura',
        email: ['sakura@gmail.com', 'sCAP@gmail.com','skr@gmail.com'],
        password: 'a123',
      }
    }
  },
  //计算属性
  computed: {
    isLogin(){
      return this.object.email.length > 0 ? 'Yes' : 'No';
    }
  },
  //方法
  methods: {
    isLogins(){
      return this.object.email.length > 0 ? 'Yes' : 'No';
    }
  }
}
</script>