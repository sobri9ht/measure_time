<template>
<div class="wrapper">
  <div class="header"><button>완료</button></div>
  <div></div>
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
    }
  },
  mounted () {
    Store.commit('setHeaderMessage',"확인")
    Store.commit('setCurrentMenu',"make")
    

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
}

</style>
