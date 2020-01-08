<template>
  <div >
    <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">添加用户</h4>
          </div>
          <div class="modal-body">
            <table class="text-center">
              <tr>
                <td><label for="oneName">姓名:</label></td>
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
    name: "UserAddu",
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

        $('#addUser').modal('hide')
        let aUser = JSON.parse( JSON.stringify( this.oneUser) )
        this.$emit("headAgreeBack", aUser);

      }




    },





  }
</script>

<style scoped>

</style>
