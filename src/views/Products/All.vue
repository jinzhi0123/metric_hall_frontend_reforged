<template>
  <el-tabs
    v-model="activeName"
    stretch
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="全部" name="/products/all/All"></el-tab-pane>
    <el-tab-pane label="自我" name="/products/all/self"></el-tab-pane>
    <el-tab-pane label="群体" name="/products/all/others"></el-tab-pane>
    <el-tab-pane label="社会" name="/products/all/society"></el-tab-pane>
  </el-tabs>
  <el-scrollbar height="400px">
    <div v-for="i in listing()">
      <product-card :product="i"></product-card>
    </div>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import ProductCard from "../../components/Card/ProductCard.vue";
import { onMounted, ref, watch } from "vue";
import { ProductStore } from "../../store/products";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import type { TabsPaneContext } from "element-plus";

const router = useRouter();
const activeName = ref("/products/all/All");

const handleClick = (tab: TabsPaneContext) => {
  console.log("handleClick");
  router.push(tab.paneName as string);
};
const route = useRoute();
const parat = () => {
  return String(route.params.type);
};

const typeMapping = ["All", "self", "others"];

const type = (): number => {
  return typeMapping.indexOf(parat());
};
watch(
  () => route.path,
  async () => {
    console.log("watch");
  }
);
// onBeforeRouteUpdate(async () => {
//   // console.log("routeChanged");
//   // await all_products.getAll(type());
// });

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
