<template>
  <h3>ComponentB</h3>
  <p>{{ title }}</p>
  <p>{{ onEvent('ComponentB data') }}</p>
</template>
<script>

export default {
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {
    title: String,
    onEvent:Function,
  },
}
</script>
<style scoped>

</style>