<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>

  import Watermark from '@/assets/js/watermark';
export default {
  name: 'App',
  component:{
    Watermark,

  },
  mounted: function () {
    Watermark.set("水印内容")
  },



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
