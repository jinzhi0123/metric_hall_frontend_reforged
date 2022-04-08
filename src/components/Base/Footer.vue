<template>
  <div class="foot">
    <div @click="pushHome">
      <img width="25" src="../../assests/Home.svg" alt="footer"/>
      <p>首页</p>
    </div>
    <div @click="pushProducts">
      <img width="25" src="../../assests/Pages.svg" alt="footer"/>
      <p>测评</p>
    </div>
    <div @click="pushMine">
      <img width="25" src="../../assests/Mine.svg" alt="footer"/>
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
  height: 75px;
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
      height: 0;
      font-size: 13px;
      line-height: 5px;
    }
    & > img {
      position: relative;
      top: 6px;
    }
  }
}
</style>
