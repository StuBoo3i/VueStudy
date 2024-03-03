<template>
  <h3>Child</h3>
  <button @click="ClickEventHandler">Submit Data</button>
</template>
<script>
export default {

  methods:{
    ClickEventHandler(){
      this.$emit('submit-data',"1008611")
    }
  }
}
</script>