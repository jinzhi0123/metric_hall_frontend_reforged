<template>
  <transition-group name="list" mode="in-out">
    <div v-for="i in props.listing" >
      <product-card :product="i"></product-card>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
import Product from "../../entity/product";
import {PropType} from "vue";

const props = defineProps({
  listing: {type: Array as PropType<Product[]>},
  type: Number
})
</script>

<style>
/*.list-enter-active, .list-leave-active {*/
/*  transition: all 0.5s;*/
/*}*/

/*.list-enter-from, .list-leave-to {*/
/*  opacity: 0;*/
/*}*/
</style>
