<template>
  <!-- 创建要控制的区域 -->
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">GM/T 0031 Rules. Electronic Seal structure information.</h3>
        <input type="button" value="test1" class="btn btn-primary" @click="test1">
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
              <td rowspan="15" style="vertical-align: middle">印章信息</td>
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
              <td rowspan="6" style="vertical-align: middle">印章属性</td>
              <td>印章类型/type</td>
              <td>{{eseal.type}}</td>
            </tr>
            <tr>
              <td>印章名称/name</td>
              <td>{{eseal.name}}</td>
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
              <td colspan="2">签名值/signData</td>
              <td>{{eseal.signData}}</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>


  </div>
</template>


<script>

  export default {
    name: "GmtESeal",
    data() {
      return {

        eseal:{
          ID: "",
          version: "",
          vid: "",
          esID: "",
          type: "",
          name: "",
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
          signData: "",

        }


      };
    },
    methods: {
      test1() {
        let that = this

        var reqJson = {
          a:  'a-value',
          b:  'abc',
          c: 123
        }

        this.$axios.post("/api/eseal/data", reqJson )
          .then(function(data){
          console.log("in ajax success")

            let result = data.data;
            let code = result.code;
            let message = result.message;
            let dataBody = result.data;
            console.log(code)
            console.log(message)
            console.log(dataBody)
            that.eseal = dataBody.seal


          console.log("finish <<< ")

        }).catch(function(error){
          console.log("return exception")
          console.log(error.toString())
        })




      },





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
