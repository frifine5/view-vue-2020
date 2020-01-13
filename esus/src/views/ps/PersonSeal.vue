<template>
  <div class="psSealBack panel">
    <div class="panel col-lg-4">
      <div class="panel panel-heading">
        我的签名和章
      </div>
      <div class="panel panel-body panel-primary">
        <table class="table table-bordered" v-if="seals != null">
          <tr>
            <td v-if="seals.sig1" width="30%" height="12%">
              <img :src="'data:image/png;base64,'+seals.sig1" width="50%" height="50%" @click="showSig(1)"/>
              <button class="btn" @click="remk(1)">清除</button>
            </td>
            <td v-else width="30%" height="12%">
              <button class="btn" @click="mkitPreview(1)">添加手写签名1</button>

            </td>

            <td v-if="seals.sig2" width="30%" height="12%">
              <img :src="'data:image/png;base64,'+seals.sig2" width="50%" height="50%" @click="showSig(2)"/>
              <button class="btn" @click="remk(3)">清除</button>
            </td>
            <td v-else width="30%" height="12%">
              <button class="btn" @click="mkitPreview(2)">添加手写签名2</button>
            </td>
          </tr>
          <tr>
            <td v-if="seals.sig3" width="30%" height="12%">
              <img :src="'data:image/png;base64,'+seals.sig3" width="50%" height="50%" @click="showSig(3)"/>
              <button class="btn" @click="remk(3)">清除</button>
            </td>
            <td v-else width="30%" height="12%">
              <button class="btn" @click="mkitPreview(3)">添加手写签名3</button>
            </td>

            <td v-if="seals.seal" width="30%" height="12%">
              <img :src="'data:image/png;base64,'+seals.seal" width="50%" height="50%" @click="showSig(4)"/>
            </td>
            <td v-else width="30%" height="12%">
              <button class="btn" @click="mkPsSeal">制作&nbsp;&nbsp;个人私章</button>
            </td>
          </tr>
        </table>
      </div>

    </div>
    <div class="col-lg-8" style="padding-top: 2em">
      <table>
        <tr>
          <td width="45%">
            <div class="col-lg-11" id="drawSig"></div>
          </td>
          <td width="50%">
            <div class="col-lg-11" id="viewSig"></div>
          </td>
        </tr>
        <tr>
          <td  colspan="2">
            <div v-if="tmpmkNum" style="align-content: center">
              <button class="btn btn-primary" @click="cltSig">清除字迹</button>
              <button class="btn btn-primary" @click="viewSig">预览图片</button>
              <button class="btn btn-primary" @click="corSig">确认提交</button>
            </div>
          </td>
        </tr>
      </table>






    </div>


  </div>

</template>

<script>


  export default {
    name: "PersonSeal",
    data() {
      return {
        info: '这是个人用户主页的头',
        seals: {
          sig1: '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',
          sig2: '',
          sig3: '',
          seal: '',
        },
        tmpmkNum: '',
        tmpSigData: '',


      }

    },

    methods: {

      showSig(num) {
        this.tmpmkNum = ''
        var i = new Image()
        let imgData = null
        if (1 === num) imgData = this.seals.sig1
        else if (2 === num) imgData = this.seals.sig2
        else if (3 === num) imgData = this.seals.sig3
        else if (4 === num) imgData = this.seals.seal
        else return
        i.src = "data:image/png;base64," + imgData
        i.classList.add('img-rounded');
        i.width = 300;
        i.height = 120;

        $('#drawSig').empty();
        $(i).appendTo($('#drawSig'));

      },

      mkitPreview(num) {
        this.tmpmkNum = num
        var sigDiv = document.createElement("div");
        sigDiv.id = 'sigDiv'
        $('#drawSig').empty();
        sigDiv.classList.add('col-lg-5')
        $(sigDiv).appendTo($('#drawSig'));

        $("#sigDiv").jSignature({color: "#f00", width: 300, height: 120, "background-color": '#00ffcc'});


      },
      remk(num){
        if (1 === num){
          this.tmpSigData = this.seals.sig1
          this.seals.sig1 = '';
        }else if (2 === num){
          this.tmpSigData = this.seals.sig2
          this.seals.sig2 = '';
        }else if (3 === num){
          this.tmpSigData = this.seals.sig3
          this.seals.sig3 = '';
        }
        else return

      },

      madeSig() {


      },

      cltSig() {
        $('#sigDiv').jSignature("reset") //清除画布并重新渲染的装饰就可以了
        $('#viewSig').empty();

      },

      viewSig() {

        var datapair = $('#sigDiv').jSignature("getData", "svgbase64")
        var i = new Image()
        i.src = "data:" + datapair[0] + "," + datapair[1]
        i.classList.add('img-rounded');
        i.width = 240;
        i.height = 100;

        $('#viewSig').empty();
        $(i).appendTo($('#viewSig'));



      },

      corSig() {
        this.tmpmkNum = ''
        $('#drawSig').empty();

// 确认 todo ...

      },

      mkPsSeal(){



      },



    },

    created() {

    },


  }
</script>

<style scoped>

  .psSealBack {
    position: absolute;
    width: 76%;
    height: 16em;
    left: calc(10%);
    top: 8em;
    background: #AEEEEE;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 0.2em;

  }

  #seeSigv {
    padding-top: 1em;

  }





</style>
