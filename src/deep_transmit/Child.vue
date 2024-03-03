<template>
  <h3>Child</h3>
  <p>{{ name }}</p>
</template>
<script>

export default {
  inject:["name"],
  data() {
    return {}
  },
  components: {},
  methods: {},
  props:{

  }
}
</script>
<style scoped>

</style>