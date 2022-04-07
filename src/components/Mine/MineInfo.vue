<template>
  <el-card class="main-card">
    <img width="100" :src="info().avtr_url" alt="头像"/>
    <el-button @click="editInfo">编辑信息</el-button>
    <el-button @click="logout">登出</el-button>
    <h4>{{ info().name }}</h4>
    <p>麦趣陪伴了你{{ days }}天</p>
  </el-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {userInfo} from "../../store/userInfo";
import {useRouter} from "vue-router";
import {loginState} from "../../store/loginStatus";

const days = ref(0);

const UserInfo = userInfo();
const router = useRouter()
const login = loginState()

const info = () => {
  return UserInfo.userInfo;
};

const editInfo = () => {
  router.push("/editinfo")
};

const logout = () => {
  login.logout()
  const router = useRouter();
  router.push("/");
}
</script>

<style lang="scss" scoped>
.main-card {
  position: relative;
  margin: 0 auto;
  top: 20px;
  width: 90%;

  & img {
    border-radius: 50%;
  }

  & .el-button {
    float: right;
    margin: 0 0 0 10px;
  }

  p {
    color: grey;
  }
}
</style>
