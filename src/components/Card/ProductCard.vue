<template>
  <el-card
    shadow="always"
    class="product"
    @click="opena(props.product.target_url)"
  >
    <img :src="props.product.backgd_url" />
    <div class="descript">
      <p class="title">{{ props.product.name }}</p>
      <p>价格：¥ {{ props.product.price / 100 }}</p>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const card: Product = {
  name: "产品",
  target_url: "http://baidu.com",
  backgd_url:
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  price: 100,
  index: 1,
};
const opena = (target_url: string) => {
  window.open(target_url);
};

const props = defineProps<{ product: Product }>();
</script>

<style lang="scss" scoped>
.el-card {
  border-radius: 15px;
  margin: 10px 0px;
}
:deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  background: #ecf0f1; 
  & img {
    width: 100px !important;
    height: 100%;
    position: relative;
  }
}
.descript {
  margin-left: 20px;
  & > .title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
