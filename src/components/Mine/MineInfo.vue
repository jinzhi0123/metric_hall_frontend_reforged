<template>
  <el-card class="main-card">
    <img width="100" :src="info.avtr_url" alt="头像"/>
    <el-button @click="editInfo">编辑信息</el-button>
    <el-button @click="logout">登出</el-button>
    <h4>{{ info.name }}</h4>
    <p>{{ info.signiture }}</p>
  </el-card>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {userInfo} from "../../store/userInfo";
import {useRouter} from "vue-router";
import {loginState} from "../../store/loginStatus";


const UserInfo = userInfo();
const router = useRouter()
const login = loginState()

const info = computed(() => {
  return UserInfo.userInfo;
})

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
@keyframes fade-in-down {
  from {
    opacity: 0.5;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
  }
}

.main-card {
  position: relative;
  margin: 0 auto;
  top: 20px;
  width: 90%;
  animation: fade-in-down 1s;

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
