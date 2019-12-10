<template>
  <!-- 创建要控制的区域 -->
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">GuoBan Rules. Electronic Seal structure information.</h3>
      </div>
      <div class="panel-body form-inline" >
        <table class="table table-hover table-bordered table-striped col-lg-9">
          <thead>
            <tr>
              <th class="col-lg-1" colspan="3">Property</th>
              <th class="col-lg-8">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="16" style="vertical-align: middle">印章信息</td>
              <td rowspan="3" style="vertical-align: middle">印章头</td>
              <td>标识/ID</td>
              <td>{{eseal.id}}</td>
            </tr>
            <tr>
              <td>版本号/version</td>
              <td>{{eseal.version}}</td>
            </tr>
            <tr>
              <td>厂商ID/Vid</td>
              <td>{{eseal.vid}}</td>
            </tr>
            <tr>
              <td colspan="2">印章标识/esID</td>
              <td>{{eseal.esID}}</td>
            </tr>
            <tr>
              <td rowspan="7" style="vertical-align: middle">印章属性</td>
              <td>印章类型/type</td>
              <td>{{eseal.type}}</td>
            </tr>
            <tr>
              <td>印章名称/name</td>
              <td>{{eseal.name}}</td>
            </tr>
            <tr>
              <td>签章人证书列表类型/certListType</td>
              <td>{{eseal.certListType}}</td>
            </tr>
            <tr>
              <td>签章人证书列表/certList</td>
              <td>{{eseal.certList}}</td>
            </tr>
            <tr>
              <td>印章制作日期/createDate</td>
              <td v-if="eseal.createDate">{{$moment(eseal.createDate).format('YYYY-MM-DD hh:mm:ss') }}</td>
              <td v-else></td>
            </tr>
            <tr>
              <td>印章有效期起/validStart</td>
              <td v-if="eseal.validStart">{{$moment(eseal.validStart).format('YYYY-MM-DD hh:mm:ss')}}</td>
              <td v-else></td>
            </tr>
            <tr>
              <td>印章有效期止/validEnd</td>
              <td v-if="eseal.validEnd">{{$moment(eseal.validEnd).format('YYYY-MM-DD hh:mm:ss')}}</td>
              <td v-else></td>
            </tr>
            <tr>
              <td rowspan="4" style="vertical-align: middle">印章图像数据</td>
              <td>印章图片类型/imgType</td>
              <td>{{eseal.imageType}}</td>
            </tr>
            <tr>
              <td style="vertical-align: middle">印章图片/imgData</td>
              <td v-if="eseal.imageData"><img :src="'data:image/png;base64,'+eseal.imageData" width="150" height="150"></td>
              <td v-else></td>
            </tr>
            <tr>
              <td>印章图片宽/imgWidth</td>
              <td>{{eseal.imageWidth}}</td>
            </tr>
            <tr>
              <td>印章图片高/imgHeight</td>
              <td>{{eseal.imageHeight}}</td>
            </tr>
            <tr>
              <td colspan="2">厂商自定义/extDatas</td>
              <td>{{eseal.exDatas}}</td>
            </tr>
            <tr>
              <td rowspan="3" style="vertical-align: middle">签名值</td>
              <td colspan="2">制章人证书/cert</td>
              <td>{{eseal.cert}}</td>
            </tr>
            <tr>
              <td colspan="2">签名算法标识/signAlgID</td>
              <td>{{eseal.signAlgID}}</td>
            </tr>
            <tr>
              <td colspan="2">签名值/signedValue</td>
              <td>{{eseal.signedValue}}</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>


  </div>
</template>


<script>
  export default {
    name: "GbESeal",
    data() {
      return {

        eseal:{
          ID: "",
          version: "",
          vid: "",
          esID: "",
          type: "",
          name: "",
          certListType: "",
          certList: "",
          createDate: "",
          validStart: "",
          validEnd: "",
          imageType: "",
          imageData: "",
          imageWidth: "",
          imageHeight: "",
          exDatas: "",
          cert: "",
          signAlgID: "",
          signedValue: "",

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
