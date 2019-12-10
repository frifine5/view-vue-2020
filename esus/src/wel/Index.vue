<template>
  <div>

    <div class="col-lg-12">
      <div class="col-lg-6">
        <gmt-e-seal></gmt-e-seal>
      </div>
      <div class="col-lg-6">
        <gb-e-seal></gb-e-seal>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="col-lg-6">
        <gmt-e-sign></gmt-e-sign>
      </div>

      <div class="col-lg-6">
        <gb-e-sign></gb-e-sign>
      </div>

    </div>

  </div>


</template>

<script>


  import GmtESeal from "@/views/esrules/GmtESeal"
  import GmtESign from "@/views/esrules/GmtESign"
  import GbESeal from "@/views/esrules/GbESeal"
  import GbESign from "@/views/esrules/GbESign"
export default {
  name: 'Index',
  components: {
    GmtESign,
    GmtESeal,
    GbESeal,
    GbESign,

  },
  data () {

    return {
      msg:"index msg"
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
