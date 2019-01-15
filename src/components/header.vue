<template>
  <div class="header">
    <div v-if="location == 'make'" @click="cancel">취소</div>
    <div @click="make">{{store.state.header_message}}</div>
    {{location}}
    
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
      // Store.commit('setHeaderMessage',"확인")
      this.$router.push('/make');
      // router.push('/make');
    },
    cancel: function() {
      this.$router.push('/');

    }
  },
  computed: {
    location: {
    get () {
      return Store.state.current_menu;
    },
    set (value) {
      this.$store.commit('setHeaderMessage', value)
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
