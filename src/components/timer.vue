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
import Component from 'vue-class-component';
import VueRouter from 'vue-router';

@Component({
 name: 'Timer',
  computed: {
    HH () {
      return this.pad(this.hour)
    },
    MM () {
      return this.pad(this.min)
    },
    SS () {
      return this.pad(this.sec)
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
)
export default class Time extends Vue{
  hour = 0
  min = 0
  sec = 0
  timer
 
  pad (d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
  }
  start () {
    this.timer = setInterval(
      this.timeplus,
      1000)
  }
  timeplus() {
    this.sec = this.sec + 1;
        console.log('this.hour :', this.hour);
  }
  stop () {
      clearInterval(this.timer);
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
