<template>
  <div class="wrapper">
    <div>{{HH}}:{{MM}}:{{SS}}</div>
    <button @click="start">start</button>
    <button @click="stop">stop</button>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'Timer',
  data () {
    return {
      hour : 0,
      min : 0,
      sec : 0,
      timer : null
    }
  },
  methods: {
    pad: function (d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
    },
    start: function() {
      timer = setInterval(
        function() {
          hour+=1
        },
        1000)
    },
    stop: function() {
       clearInterval(timer);
    }
  },
  computed: {
    HH () {
      return this.pad(hour)
    },
    MM () {
      return this.pad(min)
    },
    SS () {
      return this.pad(sec)
    },
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
