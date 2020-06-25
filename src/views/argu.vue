<template>
  <div>
      {{ name }}
  </div>
</template>

<script>
  export default {
    name: 'argu',
    props:{
      name:{
        type:[String, Number],
        default: 'tian'
      }
    }
  }
</script>

<style scoped>

</style>
