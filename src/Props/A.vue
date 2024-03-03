<template>
  <h3>A</h3>
  <B :title="title"/>
</template>
<script>
import B from "./B.vue";
export default {
  data(){
    return {
      title: "test",

    }
  },
  components:{
    B,
  }
}
</script>