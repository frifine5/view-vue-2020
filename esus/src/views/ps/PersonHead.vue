<template>
  <div class="psHeadBack" >
    <div>名字：{{person.username}}</div>





  </div>

</template>

<script>


  export default {
    name: "PersonHead",
    data(){
      return {
        info: '这是个人用户主页的头',
        person:{
          username: '',
          sex: '',
          info: '',
          icon: '',
        }







      }

    },

    created(){
      this.person.username = localStorage.getItem('username')

    }



  }
</script>

<style scoped>

  .psHeadBack{
    position: absolute;
    width: 76%;
    height: 6em;
    left: calc( 10%);
    top: -1em;
    background: #AEEEEE;
    padding: 1em 1em;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 1em;


  }





</style>
