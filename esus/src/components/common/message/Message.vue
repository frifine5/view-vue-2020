<template>
  <transition name="fade" >
    <div class="message" :class="type" v-if="visible">
      <i class="icon-type iconfont" :class="'icon-'+type"></i>
      <div class="content">{{content}}
        <i v-if="hasClose" class="btn-close iconfont icon-close" @click="visible=false"></i>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "MyMessage",
    data() {
      return {
        content: '',
        time: 3000,
        visible: true,
        type: 'info',//'success','warning','error'
        hasClose: false,
      }
    },
    mounted() {
      this.close()
    },
    methods: {
      close() {
        window.setTimeout(() => {
          this.visible = false
        }, this.time);
      }
    }
  }
</script>
<style scoped>

  div {
    position: fixed;
    z-index: 100;
    left: calc( 50% - 225px);
    /*top: 35px;*/
    width: 450px;
    /*height: 70px;*/
    background: #99ffcc;
    font-size: 24px;
    text-align: center;
    opacity: 80%;
    animation: showMsg 1s linear;

  }

  .info {
    background: #66ccff;
    color: #fff;
  }

  .success {
    background: #00ee00;
    color: #fff;
  }

  .warning {
    background-color: #ccff33;
    color: #0000ee;
  }

  .error {
    background: #a30f0f;
    color: #000;
  }

  @keyframes showMsg {
    0% {
      transform: translateY(0px);
      opacity: 0 ;
    }

    10% {
      transform: translateY(0px);
      opacity: 10% ;
    }

    30% {
      transform: translateY(0px);
      opacity: 30% ;
    }

    50% {
      transform: translateY(0px);
      opacity: 50% ;
    }

    80% {
      transform: translateY(0px);
      opacity: 80% ;
    }
  }


</style>
