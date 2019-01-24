<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/header'
import Graph from '@/components/graph'
import Bottom from '@/components/bottom'
import Store from './store/store.ts'
export default {
  components: {
    Header,
    Graph,
    Bottom
  },
  data () {
    return {
      degree: 23,
      todayDegree: 23,
      totalDegree: 70,
      mode: 1,
      modeMessage: "오늘 누적 시간",
      todayMessage: "오늘 누적 시간",
      totalMessage: "총 누적 시간",
    }
  },
  methods: {
    changeMode : function () {
      this.mode = (this.mode * -1)
      if(this.mode == 1){
        this.modeMessage = this.todayMessage;
        this.degree = this.todayDegree;
      }else {
        this.modeMessage = this.totalMessage;
        this.degree = this.totalDegree

      }
    }
  },
  name: 'App',
  mounted () {
    Store.commit('setHeaderMessage',"추가")
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
