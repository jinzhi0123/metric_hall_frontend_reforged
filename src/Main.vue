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
// begin init login state
const login = loginState()
const info = userInfo();

onMounted(async () => {
      login.loadfromLocal();
      await info.fetchInfo(login.userid);
    }
)

</script>
