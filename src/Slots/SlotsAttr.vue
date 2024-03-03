<template>
  <h3>SlotsAttr</h3>
  <slot name="header" :msg="childMessages"></slot>
  <slot name="main" :job="job"></slot>
</template>
<script>

export default {
  data() {
    return {
      childMessages:"child messages",
      job:"job messages"
    }
  },
  components: {},
  methods: {}
}
</script>
<style scoped>

</style>