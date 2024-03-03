<template>
  <h3>Parent</h3>
  <Child :title="message" :demo="text" :names="names" :userInfo="userInFo"/>
</template>
<script>

import Child from "@/Props/Child.vue";
export default {
  data(){
    return {
      message: "Parent Date!!",
      text: 20,
      names:["1","2","3","4","5","6","7","8","9"],
      userInFo:{
        name: "123",
        age: 18,
      }
    }
  },
  components:{
    Child,
  }
}
</script>
