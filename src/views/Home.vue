<template>
  <div class="home">
    <b>{{food}}</b>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">
      返回上一页
    </button>
    <button @click="handleClick('push')">
      跳转到parent
    </button>
    <button @click="handleClick('replace')">
     替换到parent
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter(to, from, next){
    //在该周期内组件还没渲染，所以不能使用this
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave(to, from, next){
    //将要离开组件时执行
    //用法：提示 ，例如：你编辑的东西还没保存，是否需要离开
    const leave = confirm('您确定要离开吗？')
    if (leave) next()
    else next(false)
  },
  beforeRouteUpdate(to, from, next){
    //当组件被复用时，会被调用，例如动态组件中 ，path: '/argu/:name',
  },
  methods:{
    handleClick(type){
      //this.$router.go(-1) 或者使用
      if(type === 'back') this.$router.back();
      else if (type === 'push') this.$router.push({name:'parent', query:{userId: '123'}})
      else if (type === 'replace') this.$router.replace({name:'parent'})
    }
  }
}
</script>
