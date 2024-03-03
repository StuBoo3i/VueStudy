<template>
  <h3>Root</h3>
  <Parent />
</template>

<script>
import Parent from "@/deep_transmit/Parent.vue";
export default {
  provide(){
    return{
      name: this.name
    }
  },
  data(){
    return {
      name: "Root!!!"
    }
  },
  components: {
    Parent
  },
  methods:{

  }
}
</script>
