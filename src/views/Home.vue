<template>
  <el-carousel trigger="click" height="200px">
    <el-carousel-item
        v-for="item of urls"
        :key="item"
        class="iconc"
        :style="{ backgroundImage: `url(${item})` }"
    >
    </el-carousel-item>
  </el-carousel>
  <div class="home">
    <el-card class="intro">
      <h1>嘿！这里是麦趣咖啡馆</h1>
      <p>
        热门推荐
      </p>
      <product-row-view/>
    </el-card>
    <el-empty description="咖啡店正在施工哦"/>
    <!--    todo: -->
  </div>
</template>

<script lang="ts" setup>
const urls = [
  "https://s.newtalk.tw/album/news/274/5d2d42e961097.jpg",
  "https://wowlavie-aws.hmgcdn.com/file/article_all/A1560997636.jpg",
  "https://okogreen.com.tw/sites/okogreen.com.tw/files/coffee-622495_1920%20%E6%8B%B7%E8%B2%9D.jpg",
];
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  border-radius: 20px 20px 0 0;
  top: -20px;
  & p{
    font-size: 20px;
    font-family: "Microsoft YaHei";
  }
}

.home {
  height: 100vh;
  background-color: #ececec;
}

.iconc {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;

}

.todo {
  //   border: 1px solid #949494;
  width: 200px;
  margin: 20px 20px 0px auto;
  box-shadow: 1px 1px #949494;
  background-color: #fff8f8;
  height: 100px;
}
</style>
