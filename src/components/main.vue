<template>
  <div class="wrapper">
     <div @click="changeMode()">
      <div class="gauge">
        <div>{{modeMessage}}</div>
        <div>
          <span class="left">0</span>
          <span class="center">50</span>
          <span class="right">100</span>
        </div>
      </div>
      <Graph :degree="degree"/>
      <Graph :degree="degree"/>
      <Graph :degree="degree"/>
      <Graph :degree="degree"/>
    </div>
    <Bottom/>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'
import Graph from '@/components/graph';
import Bottom from '@/components/bottom';
// @Component 데코레이터는 클래스가 Vue 컴포넌트임을 나타냅니다.
@Component({
  name: 'Main',
  components: {
    Graph
  },
  props: [],
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
  // 모든 컴포넌트 옵션이 이곳에 허용됩니다.
  // template: '<button @click="onClick">Click!</button>'
})
export default class MyComponent extends Vue {
  show = false
  open () {
    this.show = !this.show
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
