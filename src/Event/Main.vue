<template>
 <h3>Main</h3>
  <search-component @searchEvent="getSearch"/>
  <p>{{ search }}</p>
</template>
<script>
import SearchComponent from "@/Event/SearchComponent.vue";
export default {
  data() {
    return {
      search: ""
    }
  },
  components: {
    SearchComponent,
  },
  methods: {
    getSearch(data) {
      this.search = data;
    }
  }
}
</script>
<style scoped>

</style>