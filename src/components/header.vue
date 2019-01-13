<template>
  <div class="header">
    <button @click="make">추가</button>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    make: function() {
      this.$router.push('/make');
      // router.push('/make');
    }
  },
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
