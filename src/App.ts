import Header from '@/components/header'
import Graph from '@/components/graph'
import List from '@/components/list'
import Bottom from '@/components/bottom'
export default {
  components: {
    Header,
    Graph,
    List,
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
  name: 'App'