<template>
  <transition-group enter-active-class="animate__animated animate__bounceInUp" appear appear-active-class="animate__animated animate__bounceInUp">
    <div v-for="i in props.listing">
      <product-card :product="i" :showLike="props.showLike"></product-card>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
import Product from "../../entity/product";
import {PropType} from "vue";

const props = defineProps({
  listing: {type: Array as PropType<Product[]>},
  showLike: Boolean
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
