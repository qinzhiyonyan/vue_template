<template>
  <div>
    <a-input v-model="stateValue"></a-input>
    <a-show :content="inputValue"></a-show>
    <p>appName: {{appName}} appNameWithVersion :{{appNameWithVersion}} firstLetter: {{firstLetter}} stateValue: {{stateValue}}</p>
    <p>{{userName}} </p>
    <button @click="handleClick">修改名字</button>
  </div>
</template>

<script>
  import AInput from '_c/AInput'
  import AShow from '_c/AShow'
  import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'store',
    data () {
      return {
        inputValue: ''
      }
    },
    computed: {
      ...mapState({
        userName: state => state.userName
      }),
      ...mapGetters([
        'firstLetter',
      ]),
      stateValue:{
        get(){
          return this.$store.state.stateValue
        },
        set(value){
          this.SET_STATE_VALUE(value)
        }
      },
      appName() {
        return this.$store.state.appName
      },
      appNameWithVersion(){
        return this.$store.getters.appNameWithVersion
      }
    },
    components: {
      AInput,
      AShow
    },
    methods: {
      ...mapMutations([
        'SET_APP_NAME',
        'SET_STATE_VALUE'
      ]),
     /* ...mapActions([
        'updateAppName'
      ]),*/
      handleInput (val) {
        this.inputValue = val
      },
      handleClick(){
       /* this.$store.commit({
          type:'SET_APP_NAME',
          appName:'aa'
        })*/
        this.SET_APP_NAME({appName:'aaa'})
        this.$store.dispatch('updateAppName')
      }
    }
  }
</script>

<style scoped>

</style>
