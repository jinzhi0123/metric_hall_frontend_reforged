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
    <div v-for="i in listing()">
      <product-card :product="i"></product-card>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import ProductCard from "../../components/Card/ProductCard.vue";
import { onMounted, ref } from "vue";
import { ProductStore } from "../../store/products";
import { useRoute, useRouter } from "vue-router";
import type { TabsPaneContext } from "element-plus";

const router = useRouter();
const activeName = ref("/products/all/All");

const handleClick = (tab: TabsPaneContext) => {
  router.push(tab.paneName);
};
const route = useRoute();
const parat = () => {
  return String(route.params.type);
};

const typeMapping = ["All", "self", "others"];

const type = (): number => {
  return typeMapping.indexOf(parat());
};

router.afterEach(async () => {
  await all_products.getAll(type());
});

// setInterval(() => {
//   console.log(parat());
// }, 1000);
const all_products = ProductStore();
onMounted(async () => {
  await all_products.getAll(type());
});
const listing = () => {
  return all_products.productLs;
};
</script>
