<template>
  <h3>Parent</h3>
  <Child />
</template>
<script>
import Child from "@/deep_transmit/Child.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    Child
  },
  methods: {},
  props:{

  }
}
</script>
<style scoped>

</style>