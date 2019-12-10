<template>
  <!-- 创建要控制的区域 -->
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">GuoBan Rules. Electronic Sign-Seal structure information.</h3>
      </div>
      <div class="panel-body form-inline" >
        <table class="table table-hover table-bordered table-striped col-lg-9">
          <thead>
            <tr>
              <th class="col-lg-1" colspan="2">Property</th>
              <th class="col-lg-8">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="6" style="vertical-align: middle">待电子签章数据</td>
              <td>版本号/version</td>
              <td>{{esign.version}}</td>
            </tr>
            <tr>
              <td>电子印章/eseal</td>
              <td>{{esign.eseal}}</td>
            </tr>
            <tr>
              <td>签章时间/timeInfo</td>
              <td v-if="esign.timeInfo">{{$moment(esign.timeInfo).format('YYYY-MM-DD hh:mm:ss')}}</td>
              <td v-else></td>
            </tr>
            <tr>
              <td>原文杂凑值/dataHash</td>
              <td>{{esign.dataHash}}</td>
            </tr>
            <tr>
              <td>原文数据的属性/propertyInfo</td>
              <td>{{esign.propertyInfo}}</td>
            </tr>
            <tr>
              <td>自定义数据/extDatas</td>
              <td>{{esign.exDatas}}</td>
            </tr>
            <tr>
              <td colspan="2">签章人证书/cert</td>
              <td>{{esign.cert}}</td>
            </tr>
            <tr>
              <td colspan="2">签名算法标识/signatureAlgorithm</td>
              <td>{{esign.signatureAlgorithm}}</td>
            </tr>
            <tr>
              <td colspan="2">签名值/signature</td>
              <td>{{esign.signature}}</td>
            </tr>
            <tr>
              <td colspan="2">时间戳/timeStamp</td>
              <td>{{esign.timeStamp}}</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>


  </div>
</template>


<script>
  export default {
    name: "GbESign",
    data() {
      return {

        esign:{
          version: 1,
          eseal: {},
          timeInfo: new Date(),
          dataHash: "",
          propertyInfo: "",
          extDatas: [],
          cert: "",
          signatureAlgorithm: "",
          signature: "",
          timeStamp: "",
        }


      };
    },
    methods: {



    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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
