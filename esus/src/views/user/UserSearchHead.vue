<template>
  <div class="col-lg-9">
    <div class="panel panel-primary">
      <div class="panel-body form-inline">
        <table>
          <tr>
            <td><label for="name">姓名:</label></td>
            <td><input id ="name" type="text" class="form-control" v-model="name"></td>
            <td><label for="idNo">证件号:</label></td>
            <td><input id="idNo" type="text" class="form-control" v-model="idNo"></td>
            <td>
              <label >证据类型:</label>
              <select id="idType" class="form-control" v-model="idTypeNo">
                <option value="0">身份证</option>

                <option value="1">护照</option>
                <option value="2">军官证</option>
                <option value="3">驾驶证</option>

                <option value="11">港澳通行证</option>
                <option value="12">台胞证</option>
                <option value="9">其它</option>
              </select>

            </td>
            <td>&nbsp;</td>
            <td>
              <input type="button" value="查询" class="btn btn-primary" @click="searchCondition">
            </td>
          </tr>
          <tr>


          </tr>


        </table>


      </div>

    </div>
  </div>

</template>

<script>


  export default {
    name: "UserSearchHead",
    data(){
      return {
        name: "",
        idNo: "",
        idTypeNo: 0,


      }

    },
    methods:{

      searchCondition(){
        let the = this;
        console.log(the.idTypeNo)
      }


    }



    /*
     *
     *
     *

import axios from 'axios'
let data = {"code":"1234","name":"yyyy"};
axios.post(`${this.$url}/test/testRequest`,data)
.then(res=>{
    console.log('res=>',res);
})


import axios from 'axios'
let data = new FormData();
data.append('code','1234');
data.append('name','yyyy');
axios.post(`${this.$url}/test/testRequest`,data)
.then(res=>{
    console.log('res=>',res);
})


import axios from 'axios'
import qs from 'Qs'
let data = {"code":"1234","name":"yyyy"};
axios.post(`${this.$url}/test/testRequest`,qs.stringify({
    data
}))
.then(res=>{
    console.log('res=>',res);
})





     *
     * */
  }
</script>

<style scoped>

</style>
