<template>
  <div class="header">
    <div v-if="location == 'make'" @click="cancel">취소</div>
    <div @click="make">{{this.$store.state.header_message}}</div>
    
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../store/store.ts';

Vue.use(VueRouter);

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      store : Store,
    }
  },
  methods: {
    make: function() {
      this.$store.commit('setHeaderMessage',"확인")
      this.$router.push('/make');
    },
    cancel: function() {
      this.$router.push('/');
    }
  },
  computed: {
    location: {
    get () {
      return this.$store.state.current_menu;
    },
    set (value) {
      this.$store.commit('setCurrentMenu', value)
    }
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
