<template>
  <div class="col-lg-10">
    <div class="col-lg-11">
      <user-search-head></user-search-head>
    </div>
    <div class="col-lg-12">
      <div class="panel-body form-inline">
        <table>
          <tr>
            <td><button class="btn btn-primary" data-toggle="modal" data-target="#addUser">添加用户</button></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="col-lg-11">
      <table class="table form-inline table-striped table-hover table-bordered">
        <thead v-if="users != null && users !=''">
        <tr>
          <th width="5%">序号</th>
          <th width="15%">姓名</th>
          <th width="10%">性别</th>
          <th width="15%">证件号</th>
          <th width="15%">创建日期</th>
          <th width="15%">操作</th>
        </tr>
        </thead>
        <tbody>

        <tr  v-cloak v-for="(item, index) of slist">
          <td>{{index+1}}</td>
          <td>{{item.username}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.userId}}</td>
          <td>
            {{$moment(item.crtTime).format('YYYY-MM-DD HH:mm:ss')}}
          </td>
          <td><a @click="changeOverlay(index)" data-toggle="modal"  data-target="#modUser">修改</a>
            | <a href="javascript:void(0);" @click="del(index)">删除</a></td>
        </tr>

        </tbody>

      </table>


    </div>
    <div>
      <user-addu
        @headCallBack="headCallBack"
        @headAgreeBack="headAddUserBack"
      ></user-addu>
      <user-modify
        :older="older"
        :modIndex="modIndex"

        @headCallBack="headCallBack"
        @headAgreeBack="headModUserBack"

      ></user-modify>

    </div>


  </div>




</template>

<script>

  import UserSearchHead from "./UserSearchHead"
  import UserAddu from "./UserAddu";
  import UserModify from "./UserModify";

  export default {
    name: "UserMain",
    components: {
      UserModify,
      UserAddu,
      UserSearchHead,



    },


    data() {
      return {
        users:  // 原始数据的列表
          [
          {
            username: 'aaaaa',
            userId: '1010',
            sex: '男',
            userIdType: 0,
            crtTime: '2020-01-07 14:36'
          },
          {
            username: 'bbbbb',
            userId: '0101',
            sex: '女',
            userIdType: 0,
            crtTime: '2020-01-07 14:36'
          }
        ],
        slist: null,



        older: null,
        modIndex: null,



      }
    },
    methods: {

      setSlist(arr) { // 展示的列表
        this.slist = JSON.parse(JSON.stringify(arr));
      },


      del(index){
        this.users.splice(index, 1)
        this.setSlist(this.users)
      },

      changeOverlay(index){
        this.older = JSON.parse( JSON.stringify(this.users[index]) );
        this.modIndex = index;
      },


      headCallBack(){
       // 取消

      },

      headAgreeBack(data){
        console.log(data)

      },

      headAddUserBack(data){
        console.log(data)
        let aUser = data
        if(aUser.username == null|| aUser.username === ''|| aUser.userId == null|| aUser.userId === ''){
          console.log("用户名或证件号为空")
          return
        }
        this.users.push(aUser);
        this.setSlist(this.users)

      },

      headModUserBack(data){
        console.log(data)
        if(null == data) return;
        let aUser = data.aUser;
        let idx = data.index;
        if(aUser.username == null|| aUser.username === ''|| aUser.userId == null|| aUser.userId === ''){
          console.log("用户名或证件号为空")
          return
        }

        this.users[idx] = aUser
        this.setSlist(this.users)

      },





    },
    created: function () {
      // some logic
      let afIn = this
      this.setSlist(afIn.users)


    },








  }


</script>

<style scoped>

  th{
    text-align:center;

  }



</style>
