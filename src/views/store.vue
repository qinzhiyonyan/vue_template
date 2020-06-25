<template>
  <div>
    <a-input @input="handleInput"></a-input>
    <a-show :content="inputValue"></a-show>
  </div>
</template>

<script>

  import AInput from '_c/AInput'
  import AShow from '_c/AShow'

  export default {
    name: 'store',
    data(){
      return {
        inputValue: ''
      }
    },
    components: {
      AInput,
      AShow
    },
    methods: {
      handleInput (val) {
        this.inputValue = val
      }
    }
  }
</script>

<style scoped>

</style>
