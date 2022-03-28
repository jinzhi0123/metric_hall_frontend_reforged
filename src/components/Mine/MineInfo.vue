<template>
  <el-card class="main-card">
    <img width="100" src="http://img-cdn.dustella.net/avtr.jpg" />
    <el-button @click="jump">编辑</el-button>
    <h4>我是用户名</h4>
    <p>麦趣陪伴了你{{ days }}天</p>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const days = ref(0);

const jump = () => {
  window.open("https://api.maiquer.tech/api/wechat/login");
};
</script>

<style lang="scss" scoped>
.main-card {
  position: relative;
  margin: 0px auto;
  top: 20px;
  width: 90%;
  & img {
    border-radius: 50%;
  }
  & .el-button {
    float: right;
  }
  p {
    color: grey;
  }
}
</style>
