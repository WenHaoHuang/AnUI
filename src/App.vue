<template>
  <div id="app">
    <header class="header">header</header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
