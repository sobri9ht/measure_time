<template>
<div class="wrapper">
  <div class="header"><button>완료</button></div>
  <div></div>
</div>
</template>

<script>
export default {
  name: 'makeTask',
  props: ['task'],
  computed: {
  },
  data () {
    return {
    }
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
