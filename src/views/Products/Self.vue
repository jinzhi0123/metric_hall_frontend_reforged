<template>
  <el-tabs
      v-model="activeName"
      stretch
      class="demo-tabs"
      @tab-click="handleClick"
  >
    <el-tab-pane label="所有" name="/products/mine/All"></el-tab-pane>
    <el-tab-pane label="已出" name="/products/mine/done"></el-tab-pane>
    <el-tab-pane label="测评中" name="/products/mine/doing"></el-tab-pane>
    <el-tab-pane label="已过期" name="/products/mine/society"></el-tab-pane>
  </el-tabs>
  <el-scrollbar height="400px">
    <!--    <div v-for="i in listing()">-->
    <!--      <product-card :product="i"></product-card>-->
    <el-empty description="这里正在施工哦"></el-empty>
    <!--    </div>-->
  </el-scrollbar>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import type {TabsPaneContext} from "element-plus";

const router = useRouter();
const activeName = ref("/products/all/All");

const handleClick = (tab: TabsPaneContext) => {
  router.push(tab.paneName as string);
};
</script>
