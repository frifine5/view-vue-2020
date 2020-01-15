<template>
  <div class="psSealBack panel">
    <div class="panel col-lg-4">
      <div class="panel panel-heading">
        我的签名和章
      </div>
      <div class="panel panel-body panel-primary">
        <table class="table table-bordered" v-if="seals != null">
          <tr>
            <td v-if="seals.sig1" width="30%" height="20%">
              <img :src="'data:image/png;base64,'+seals.sig1" width="50%" height="50%" @click="showSig(1)"/>
              <button class="btn" @click="remk(1)">清除</button>
            </td>
            <td v-else width="30%" height="20%">
              <button class="btn" @click="mkitPreview(1)">添加手写签名1</button>

            </td>

            <td v-if="seals.sig2" width="30%" height="20%">
              <img :src="'data:image/png;base64,'+seals.sig2" width="50%" height="50%" @click="showSig(2)"/>
              <button class="btn" @click="remk(2)">清除</button>
            </td>
            <td v-else width="30%" height="20%">
              <button class="btn" @click="mkitPreview(2)">添加手写签名2</button>
            </td>
          </tr>
          <tr>
            <td v-if="seals.sig3" width="30%" height="20%">
              <img :src="'data:image/png;base64,'+seals.sig3" width="50%" height="50%" @click="showSig(3)"/>
              <button class="btn" @click="remk(3)">清除</button>
            </td>
            <td v-else width="30%" height="20%">
              <button class="btn" @click="mkitPreview(3)">添加手写签名3</button>
            </td>

            <td v-if="seals.seal" width="30%" height="20%">
              <img :src="'data:image/png;base64,'+seals.seal" width="50%" height="30%" @click="showSig(4)"/>
            </td>
            <td v-else width="30%" height="20%">
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
          sig1: '',
          sig2: '',
          sig3: '',
          seal: '',
        },
        tmpmkNum: '',
        tmpSigData: '',
        account: '',


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
        if(num === 4){
          i.width = 180;
          i.height = 180;
        }

        $('#drawSig').empty();
        $(i).appendTo($('#drawSig'));

      },

      mkitPreview(num) {
        this.tmpmkNum = num
        this.tmpSigData = ''
        var sigDiv = document.createElement("div");
        sigDiv.id = 'sigDiv'
        $('#drawSig').empty();
        sigDiv.classList.add('col-lg-5')
        $(sigDiv).appendTo($('#drawSig'));

        $("#sigDiv").jSignature({color: "#f00", width: 300, height: 120, "background-color": '#00ffcc'});

      },

      remk(num){
        $('#viewSig').empty();
        $('#drawSig').empty();

        let flag = confirm('您确定清除手写签名' + num);
        if(!flag) return;

        let that = this
        var reqJson = {
          "account": this.account,
          "sigNo": num
        }

        that.$axios.post('/api/ps/clearPsSig', reqJson).then(res => {
          console.log(res.data);
          if (0 !== res.data.code) {
            this.$my_message({
              content: '清除失败: ' + res.data.msg,
              time: 2000,
              type: 'error',
              hasClose: true,
            });
          } else {
            this.getPsSeals();
          }
        }).catch(error => {
          this.$my_message(
            {
              content: '服务繁忙，请稍后重试:' + error,
              time: 3000,
              type: 'warning',
              hasClose: true,
            });
          console.log(error);
        });
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
        this.tmpSigData = datapair[1]

        $('#viewSig').empty();
        $(i).appendTo($('#viewSig'));


      },

      corSig() {
        let that = this
        if(!this.tmpSigData){
          this.$my_message({
            content: '提示: 请先预览',
            time: 2000,
            type: 'warning',
            hasClose: true,
          });
          return;
        }

        let num = this.tmpmkNum
        var reqJson = {
          "account": this.account,
          "sig": this.tmpSigData,
          "sigNo": num ,
          "imgType": "svg"
        }

        that.$axios.post('/api/ps/upPsSigs', reqJson).then(res => {
          if (0 !== res.data.code) {
            this.$my_message({
              content: '上传失败: ' + res.data.msg,
              time: 2000,
              type: 'error',
              hasClose: true,
            });
          } else {
            that.getPsSeals();
            that.tmpmkNum = ''
            $('#drawSig').empty();
            that.tmpSigData = '';
            $('#viewSig').empty();
          }
        }).catch(error => {
          this.$my_message(
            {
              content: '服务繁忙，请稍后重试:' + error,
              time: 3000,
              type: 'warning',
              hasClose: true,
            });
          console.log(error);
        });

      },

      mkPsSeal(){
        let flag = confirm("个人名章一经生成不得删除，除非注销用户");
        if(!flag) return;
        let that = this
        var reqJson = {
          "account": this.account
        }

        that.$axios.post('/api/ps/genPsSeal', reqJson).then(res => {
          if (0 !== res.data.code) {
            this.$my_message({
              content: '制作失败: ' + res.data.msg,
              time: 2000,
              type: 'error',
              hasClose: true,
            });
          } else {
            this.$my_message(
              {
                content: '制作成功',
                time: 1000,
                type: 'success',
                hasClose: true,
              });
            that.getPsSeals();
          }
        }).catch(error => {
          this.$my_message(
            {
              content: '服务繁忙，请稍后重试:' + error,
              time: 3000,
              type: 'warning',
              hasClose: true,
            });
          console.log(error);
        });


      },


      getPsSeals(){
        let that = this;
        let account = localStorage.getItem("userAccount");
        var reqJson = {
          "account": account
        }
        that.$axios.post('/api/ps/getPsSigs', reqJson).then(res => {
          // console.log(res.data);
          if (0 !== res.data.code) {
            this.$my_message({
              content: '查询失败: ' + res.data.msg,
              time: 2000,
              type: 'error',
              hasClose: true,
            });
          } else {
            that.seals.sig1 = res.data.data.sig1;
            that.seals.sig2 = res.data.data.sig2;
            that.seals.sig3 = res.data.data.sig3;
            that.seals.seal = res.data.data.seal;
            that.account = res.data.data.account;
          }
        }).catch(error => {
          this.$my_message(
            {
              content: '服务繁忙，请稍后重试:' + error,
              time: 3000,
              type: 'warning',
              hasClose: true,
            });
          console.log(error);
        });

      },


    },

    created() {

      this.getPsSeals();


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
