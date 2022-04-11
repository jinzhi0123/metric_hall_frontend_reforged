<template>
  <div v-if="success">
    <el-result
        icon="success"
        title="绑定成功"
        sub-title="正在跳转..."
    >
    </el-result>
  </div>
  <el-card v-else>
    <div class="form">

      <el-input v-model="phone" placeholder="输入手机号"/>
      <el-input v-model="code" class="code" placeholder="输入验证码"/>
      <el-button @click="getCode" :disabled="time<60">{{
          time >= 60 ? "获得验证码" : `${time}后再试`
        }}
      </el-button>
    </div>
    <div class="form">
      <el-button type="primary" class="auth" @click="bind">绑定</el-button>
    </div>
    <img src="../../assests/phone.svg">
  </el-card>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {loginState} from "../../store/loginStatus";

const success = ref(false)
const phone = ref("")
const code = ref("")
const message = ref("")
const time = ref(60)
const login = loginState()
const getCode = async () => {
  await login.doSendSms(phone.value)
  let timer = setInterval(() => {
    if (--time.value < 0) {
      clearInterval(timer)
      time.value = 60
    }
  }, 1000)
}

const bind = async () => {
  await login.doSmsBind(phone.value, code.value).then(
      r => {
        if (r) {
          success.value = r
          setTimeout(() => {
            location.href = "/editinfo"
          }, 300)
        }
      }
  )
}
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  margin: 10px auto;


  :deep(.el-input__inner) {
    width: 100%;
    height: 40px;
  }
}

.el-card {
  margin: 20px;
}

.el-input {
  width: 100%;
  margin: 0 auto
}

.form {
  position: relative;
  width: 80%;
  margin: auto;
}

.code {
  width: 60%;
  margin: 0 auto 0 10%
}

.el-input {
  margin: 10px auto;
}
</style>