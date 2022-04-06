<template>
  <div>
    <main-footer/>
    <router-view/>
  </div>

</template>

<script lang="ts" setup>
import MainFooter from "./components/Base/Footer.vue"
import {loginState} from "./store/loginStatus";
import {onMounted} from "vue";
import {userInfo} from "./store/userInfo";
import {ProductStore} from "./store/products";
// begin init login state
const login = loginState()
const info = userInfo();
const products = ProductStore();

//after mounted, init data

onMounted(async () => {
// const product = ProductStore()
      login.loadfromLocal();
      await Promise.all([info.fetchInfo(login.userid), products.getAll()]);

    }
)

</script>
