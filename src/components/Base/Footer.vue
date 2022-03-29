<template>
  <div class="foot">
    <div @click="pushHome">
      <img width="30" src="../../assests/Home.svg" />
      <p>首页</p>
    </div>
    <div @click="pushProducts">
      <img width="30" src="../../assests/Pages.svg" />
      <p>测评</p>
    </div>
    <div @click="pushMine">
      <img width="30" src="../../assests/Mine.svg" />
      <p>我的</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const pushHome = () => {
  router.push("/");
};
const pushMine = () => {
  router.push("/mine");
};
const pushProducts = () => {
  router.push("/products/all");
};
</script>

<style lang="scss" scoped>
.foot {
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 255;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  & > div {
    text-align: center;
    & > p {
      height: 0px;
      line-height: 5px;
    }
  }
}
</style>
