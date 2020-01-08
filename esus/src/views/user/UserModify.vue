<template>
  <div >
    <div class="modal fade" id="modUser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">添加用户</h4>
          </div>
          <div class="modal-body">
            <table class="table form-group table-hover table-bordered">
              <thead>
                <tr>
                  <th>项目</th>
                  <th>修改前</th>
                  <th colspan="2">修改后</th>
                </tr>
              </thead>

              <tbody v-if="older != null">
                <tr>
                  <td><label for="oneName">姓名:</label></td>
                  <td>{{older.username}}({{older.sex}})</td>
                  <td><input id ="oneName" type="text" class="form-control" v-model="oneUser.username"></td>
                  <td>
                    <select class="form-control" v-model="oneUser.sex">
                      <option value="男">男</option>
                      <option value="女">女</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label for="oneIdNo">证件号:</label></td>
                  <td>{{older.userId}}</td>
                  <td><input id="oneIdNo" type="text" class="form-control" v-model="oneUser.userId"></td>
                  <td>
                    <select class="form-control" v-model="oneUser.userIdType">
                      <option value="0">身份证</option>
                      <option value="1">护照</option>
                      <option value="2">军官证</option>
                      <option value="3">驾驶证</option>
                      <option value="11">港澳通行证</option>
                      <option value="12">台胞证</option>
                      <option value="9">其它</option>
                    </select>
                  </td>
                </tr>
              </tbody>

            </table>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelIt">关闭</button>
            <button type="button" class="btn btn-primary" @click="agreeIt">提交</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserModify",
    props:{
      older:{
        type: Object,
        default: null
      },
      modIndex:{
        type: Number,
        default: null,
      }

    },
    data(){
      return{
        oneUser:{
          username: '',
          userId: '',
          sex: '男',
          userIdType: 0,
          crtTime: new Date(),

        }


      }
    },
    methods:{
      cancelIt(){
        this.$emit("headCallBack")

      },

      agreeIt(){

        $('#modUser').modal('hide')
        let aUser = JSON.parse( JSON.stringify( this.oneUser) )
        let index = this.modIndex
        let data = JSON.parse( JSON.stringify( {
          "aUser": aUser,
          "index": index
        }) )

        this.$emit("headAgreeBack", data);

      }




    },





  }
</script>

<style scoped>

  th, td{
    text-align:center;
    horiz-align: center;
    vertical-align: middle;
    font-size: 1.2em;
    align-content: center;
  }



</style>
