<template>
  <h3>ComponentA</h3>
  <p>{{ message }}</p>
  <button @click="updateHandler">Update data</button>
</template>
<script>

export default {
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  data() {
    return {
      message: 'Old data'
    }
  },
  components: {},
  methods: {
    updateHandler() {
      this.message = 'New data'
    }
  }
}
</script>
<style scoped>

</style>