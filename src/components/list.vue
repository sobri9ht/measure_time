<template>
  <div class="list">
    <div class="item">
      <div>영어듣기</div>
      <div @click="open">O</div>
      <div class="start">시작</div>
      <div>10:00</div>
    </div>
    <div v-if="show" class="detail">
      <div>
      <span>목표 시간</span><span>1000시간</span>
      </div>
      <div>
      <span>오늘 누적 시간</span><span>2시간</span>
      </div>
      <div>
      <span>총 누적 시간</span><span>54시간</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
// @Component 데코레이터는 클래스가 Vue 컴포넌트임을 나타냅니다.
@Component({
  name: 'List',
  props: [],
  data () {
    return {
    }
  }
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
.list{
  .item{
    display: inline-flex;
    div{
      margin: 0 30px;
    }
    .start{
      border: 1px solid;
    }
  }
}

</style>
