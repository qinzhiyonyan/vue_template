<template>
    <div>
      I am parent
      <!--router-view是必须的，不然子路由显示不出来-->
      <router-view />
    </div>
</template>

<script>
  export default {
    name: 'parent',
    computed:{
      useId(){
        console.log(this.$route.query.userId)
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
