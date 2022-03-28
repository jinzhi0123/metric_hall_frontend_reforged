<template>
  <el-container>
    <el-aside width="70px">
      <div class="menu-card fade-in-lf">
        <div class="option-btn" v-for="(i, v) in classes" :key="i">
          <router-link style="" :to="i">
            {{ v }}
          </router-link>
        </div>
      </div>
    </el-aside>
    <el-main>
      <div v-for="i in listing()">
        <product-card :product="i"></product-card>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import ProductCard from "../components/Card/ProductCard.vue";
import { onMounted } from "vue";
import { ProductStore } from "../store/products";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
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
const classes = {
  全部: "/products/All",
  自我: "/products/self",
  群体: "/products/others",
  社会: "/products/society",
};
</script>

<style lang="scss">
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

.el-container {
  background-color: #ededed;
  height: 100vh;
  & .el-aside {
    background-color: #fff;
  }
}
</style>
