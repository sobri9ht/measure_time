<template>
  <div class="graph">
    <div class="degree-gauge" :style="style"></div>
    <div class="degree-num">
      <span>
        {{degree}}%
      </span>
    </div>
    <div class="total"></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Graph',
  props: ['degree'],
  computed: {
    style () {
      return `width: ${this.degree}%;
    background: rgb(28, 177, 63);
    height: 40px;
    position: absolute;`
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.graph{
  margin: 10px 0;
  .total{
    width: 100%;
    height: 40px;
    background-color : rgb(241, 235, 235);
  }
  .degree-num {
    position: absolute;
    margin: auto 45.3%;
  }
  button{
    right : 0;

  }

}

</style>
