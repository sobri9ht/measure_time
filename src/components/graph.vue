<template>
  <div class="graph">
    <div :style="style"></div>
    <div class="total"></div>
    {{degree}}
  </div>
</template>

<script>
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
  .degree {
    width: 20%;
    background: rgb(28, 177, 63);
    height: 40px;
    position: absolute;
  }
  button{
    right : 0;

  }

}

</style>
