<template>
  <el-card class="main-card">
    <img width="100" src="http://img-cdn.dustella.net/avtr.jpg" />
    <el-button>编辑</el-button>
    <h4>我是用户名</h4>
    <p>麦趣陪伴了你{{ days }}天</p>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const days = ref(0);
</script>

<style lang="scss" scoped>
.main-card {
  margin: 20px auto;
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
