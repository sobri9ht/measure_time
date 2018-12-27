<template>
<section>
  <div>
    <div>그래프영역</div>
    <div>태스크영역</div>
  </div>
</section>
</template>

<script>

import AppLogo from '~/components/AppLogo.vue'
import TimeMeasure from '../components/Timemeasure.vue';
// import moduleName from '../components/Time';
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
components: {
    AppLogo,
    TimeMeasure
  },
  data:{
    flag: null
  },
  methods: {
    goTo: function(to) {
      flag = to;
    }
  }
})
export default class Main extends Vue{
  
}
</script>


<style>
</style>

