<template>
  <div class="main">
<!--    <el-card class="main-card" @click="login">-->
<!--      <img width="50" height="50" :src="info().avtr_url" alt="头像">-->
<!--      <div class="info">-->
<!--        <h4>{{ info().name }}</h4>-->
<!--        <div>测试中，出报告，订阅过期</div>-->
<!--      </div>-->
<!--    </el-card>-->
    <el-main>
      <el-tabs
          v-model="activeName"
          type="border-card"
          class="demo-tabs"
          stretch
          @tab-click="handleClick"
      >
        <el-tab-pane label="全部" name="all">
          <router-view/>
        </el-tab-pane>
        <el-tab-pane label="我的结果" name="mine">
          <router-view/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {TabsPaneContext} from "element-plus";
import {useRouter} from "vue-router";
import {userInfo} from "../store/userInfo";
import {loginState} from "../store/loginStatus";

const UserInfo = userInfo();

const info = () => {
  return UserInfo.userInfo;
};

const router = useRouter();

const activeName = ref("all");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  router.push(tab.paneName == "all" ? "/products/all/All" : "/products/mine");
};

const login = () => {
  const l = loginState()
  if (!l.isLoggedIn) {
    window.open("https://api.maiquer.tech/api/wechat/login")
  }
}
</script>

<style lang="scss" scoped>
@keyframes card-fade-in-up {
  from {
    transform: translateY(-50%);
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes card-fade-in-down {
  from {
    transform: translateY(50%);
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

.el-main {
  height: 95vh;
}

.demo-tabs {
  position: relative;
  top: 25px;
  animation: card-fade-in-down 1s;
  // background-color: white;
  & > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
}

.info {
  display: inline-block;
  position: relative;
  height: 100px;
  margin-top: 0px;
  margin-left: 10px;
  top: 0px;

  & > h4 {
    line-height: 4px;
  }

  & > div {
    height: 8px;
    color: grey;
    // line-height: ;
    font-size: 12px;
  }
}

:deep(.el-card__body) {
  padding: 5px 10px;
}

.main-card {
  position: relative;
  margin: 0px auto;
  top: 20px;
  width: 90%;
  height: 85px;
  animation: card-fade-in-up 1s;

  & img {
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    color: grey;
  }
}

.menu-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(100%) blur(40px);
  background-clip: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
}

.option-btn {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8vh;
  transition: all 0.5s;

  :hover {
    width: 100%;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  overflow: visible;

  a {
    color: grey;
    font-size: 18px;
    text-decoration: none;
  }

  ::before {
    display: inline-block;
    height: 100%;
    content: "";
    vertical-align: middle;
  }
}

.main {
  //background-col#ededed;
  background: linear-gradient(#ededed, #fff);
  height: 100vh;
}
</style>
