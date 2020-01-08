<template>
  <div  >

    <!-- 写在父组件的调用代码  -->
    <!--

    <el-button type="text" class="btn btn-primary" @click="openDialog">新增/修改用户</el-button>
      <add-or-upt-user
        :dialogFormVisible="dialogFormVisible"

        :dialogTableVisible="dialogTableVisible"

        @headCallBack="headCallBack"
        @headAgreeBack="headAgreeBack"

      ></add-or-upt-user>


    -->



    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" class="panel panel-primary col-lg-10" >
        <el-form :model="form"  >
          <el-form-item label="活动名称" >&lt;!&ndash; :label-width="formLabelWidth">&ndash;&gt;
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" >
          <el-button @click="cancelIt">取 消</el-button>
          <el-button type="primary" @click="agreeIt">确 定</el-button>
        </div>
      </el-dialog>


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

        this.$emit("headAgreeBack", false);

      }




    },




  }
</script>

<style scoped>

</style>
