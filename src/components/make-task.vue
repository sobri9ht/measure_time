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
}

</style>
