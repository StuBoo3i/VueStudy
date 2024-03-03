<template>
  <h3>Child</h3>
  <p>{{ title }}</p>
  <p>{{ demo }}</p>
  <ul>
    <li v-for="(item, index) in names" :key="index">{{ item }}</li>
  </ul>
</template>
<script>

export default {
  data(){
    return {

    }
  },
  props:["title","demo","names","userInFo"]
}
</script>