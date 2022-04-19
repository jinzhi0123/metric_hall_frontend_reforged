<template>
    <div>
        <div class="top"></div>
        <el-card class="intro">
            <p>
                {{data}}
            </p>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {ProductStore} from '../store/products'

const route = useRoute();
const Products = ProductStore()

const data:Product =Products.productLs.find(v => v.index === Number(route.params.id))!


</script>

<style lang="scss" scoped>
.top{
    height:120px;
    background-color:#2ecc71
}
.intro {
    position: relative;
    border-radius: 20px 20px 0 0;
    top: -20px;

    p {
        font-size: 20px;
        font-family: "Microsoft YaHei";
    }
}
</style>