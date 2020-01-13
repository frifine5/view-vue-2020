<template>
  <div>
    <person-head></person-head>
    <person-seal></person-seal>





  </div>

</template>

<script>

  import PersonHead from './PersonHead'
  import PersonSeal from "./PersonSeal";
  export default {
    name: "PersonMain",
    components: {
      PersonSeal,
      PersonHead

    },

    data(){
      return {
        info: '这是个人用户主页',







      }

    }



  }
</script>

<style scoped>

</style>
