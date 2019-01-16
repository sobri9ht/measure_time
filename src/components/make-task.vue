<template>
<div class="wrapper">
  <div class="header"></div>
  <div class= "bottom">
      <div class="item">
        <div>타이머 이름</div>
        <div>
          <input :placeholder="name" type="text">
        </div>
      </div>
      <div class="item">
        <div>총 목표 시간</div>
        <div>
          <input :placeholder="total_time" type="number"> <span>시간</span>
        </div>
      </div>
      <div class="item">
        <div>하루 목표시간</div>
         <div>
           <input :placeholder="daily_time" type="number"><span>시간</span>
         </div>
      </div>
  </div>
</div>
</template>

<script>
import Store from '../store/store.ts';

export default {
  name: 'makeTask',
  props: ['task'],
  computed: {
  },
  data () {
    return {
      name: '타이머 이름',
      total_time: 100,
      daily_time: 10,
    }
  },
  mounted () {
    this.$store.commit('setHeaderMessage',"확인")
    this.$store.commit('setCurrentMenu',"make")
  },
  destroyed () {
    this.$store.commit('setHeaderMessage',"")
    this.$store.commit('setCurrentMenu',"")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper{
  .header{
    height: 40px;
    button{
      right: 10px;
    }
  }
  .bottom {
    .item{
      display: flex;
      :first-child{
        width: 35%;
      }
      :last-child{
        width: 65%;
      }
      
    }
  }
}

</style>
