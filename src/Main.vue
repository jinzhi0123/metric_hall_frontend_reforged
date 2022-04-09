<template>
  <div>
    <main-footer/>
    <router-view/>
  </div>

</template>

<script lang="ts" setup>
import MainFooter from "./components/Base/Footer.vue"
import {loginState} from "./store/loginStatus";
import {onMounted, onBeforeMount} from "vue";
import {userInfo} from "./store/userInfo";
import {ProductStore} from "./store/products";
// begin init login state
const login = loginState()
const info = userInfo();
const products = ProductStore();


onBeforeMount(async () => {
//
//after mounted, init products
      login.loadfromLocal();
      await Promise.all([info.fetchInfo(login.userid,login.jwtToken), products.getAll()]);
    }
)

</script>
