<template>
  <div class="bottom">
    <div class="header">
      <span>태스크 명</span>
      <span>누적시간</span>
    </div>
    <List/>
  </div>
</template>

<script>
import List from '@/components/list'
export default {
  components: {
    List
  },
  name: 'Bottom',
  props: [],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bottom{
  .header{
    display: flex;
    margin: 10px 0;

    span{
      width:50%;
    }
  }
}

</style>
