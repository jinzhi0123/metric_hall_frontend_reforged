<template>
  <div>
    <el-card class="edit">
      <table class="info">
        <tr>
          <td>头像</td>
          <td>头像</td>
        </tr>
        <tr>
          <td>用户名</td>
          <td>{{ myinfo.name }}</td>
        </tr>
        <tr>
          <td>个性签名</td>
          <td>{{ myinfo.signiture }}</td>
        </tr>
        <tr>
          <td>绑定手机号</td>
          <td>{{ myinfo.phone ? myinfo.phone : "未绑定" }}</td>
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
  padding: 20px;

  & > {
    width: 100%
  }
}

.info {
  & tr {
    height: 40px;
    border: 2px solid black;

    & td:first-child {
      color: gray;
    }

    & td:nth-of-type(2) {
      text-align: end;
    }
  }
}

</style>