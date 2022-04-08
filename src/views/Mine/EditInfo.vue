<template>
  <div>
    <el-card class="edit">
      <div>用户信息</div>
      <div class="username">
        <span>用户名</span>
        <span>{{ info.username }}</span>
        <el-button @click="editName">修改</el-button>
      </div>
    </el-card>
    <el-empty description="这里正在施工哦"></el-empty>
  </div>


</template>

<script lang="ts" setup>
import {userInfo} from "../../store/userInfo";

const info = userInfo()
const editName = () => {
  console.log("d")
}

</script>

<style scoped lang="scss">
.edit {
  margin: 20px;
  padding: 30px;

  & > {
    width: 100%
  }
}

.username {
  & > :nth-of-type(2) {
    width: 100px;
  }
}

</style>