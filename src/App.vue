<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
  import headerBar from 'components/headerBar';
  export default {
    name: 'app',
    components:{
      headerBar
    },
    created() {
      this.set();
      window.onresize = () => {
        this.set();
      }

    },
    methods: {
      set() {
        const width = document.documentElement.clientWidth;
        const discount = 750 / 100;
        const fontSize = width / discount;
        document.documentElement.style.fontSize = fontSize + 'px';
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/basic";
</style>
