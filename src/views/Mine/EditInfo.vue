<template>
  <div>
    <el-card class="edit">
      <table class="info">
        <tr>
          <td>头像</td>
          <td><img width="65" :src="myinfo.avtr_url"></td>
          <td> › </td>
        </tr>
        <tr>
          <td>背景图</td>
          <td><img width="105" :src="myinfo.backgd_url"></td>
          <td> › </td>
        </tr>
        <tr>
          <td>用户名</td>
          <td>{{ myinfo.name }}</td>
          <td> › </td>
        </tr>
        <tr>
          <td>个性签名</td>
          <td>{{ myinfo.signiture }}</td>
          <td> › </td>
        </tr>
        <tr>
          <td>绑定手机号</td>
          <td>{{ myinfo.phone ? myinfo.phone : "未绑定" }}</td>
          <td> › </td>
        </tr>
        <tr>
          <td>绑定微信</td>
          <td>已绑定</td>
        </tr>
      </table>
    </el-card>
    <el-empty description="这里正在施工哦"></el-empty>
  </div>
</template>

<script lang="ts" setup>
import {userInfo} from "../../store/userInfo";
import {computed} from "vue";

const info = userInfo()

const myinfo = computed(() => {
  return info.userInfo
})
const editName = () => {
  console.log("d")
}

</script>

<style scoped lang="scss">
.edit {
  margin: 20px;
  padding: 4px;

  & > {
    width: 100%
  }
}

.info {
  width: 100%;

  & tr {
    height: 50px;
    border: 2px solid black;

    & td:first-child {
      color: gray;
    }

    & td:nth-of-type(2) {
      text-align: end;
    }

    & td:nth-of-type(3) {
      position: relative;
      margin-top:2px!important;
      text-align: end;
      color: #6b778c;
      font-size: 16px;
    }
  }
}

</style>