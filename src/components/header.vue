<template>
  <div class="header">
    <button>추가하기</button>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
  background-color : grey;
  button{
    right : 0;

  }

}

</style>
