<template>
  <h3>ComponentA</h3>
  <p>ComponentA:{{ message }}</p>
  <ComponentB title="Title" :onEvent="dataFn"/>

</template>
<script>
import ComponentB from "@/Event/ComponentB.vue";
export default {
  data() {
    return {
      message:""
    }
  },
  components: {
    ComponentB,
  },
  methods: {
    dataFn(data) {
      this.message = data;
    }
  }
}
</script>
<style scoped>

</style>