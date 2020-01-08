<template>
  <div  >


    <!-- 父组件调用代码 -->
    <!--
         <button class="btn btn-primary btn-lg" data-toggle="modal" @click="openDialog" data-target="#myModal">开始演示模态框</button>

    -->

      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>
            </div>
            <div class="modal-body">在这里添加一些文本</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="cancelIt">关闭</button>
              <button type="button" class="btn btn-primary" @click="agreeIt">提交更改</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>

    </div>
</template>

<script>
  export default {
    name: "monitorPopup",
    props: {
      currentPath: {
        type: String,
        default: '404'
      },
      dialogTableVisible: {
        type: Boolean,
        default: false
      },
      dialogFormVisible:{
        type: Boolean,
        default: false
      },


    },
    data(){
      return{

        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods:{
      cancelIt(){
        this.$emit("headCallBack")

      },
      agreeIt(){

        $('#myModal').modal('hide')
        this.$emit("headAgreeBack", false);

      }




    },




  }
</script>

<style scoped>

</style>
