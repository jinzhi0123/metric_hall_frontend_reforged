<template>
  <div>
    <el-card class="edit">
      <table class="info">
        <tr>
          <td>头像</td>
          <!--          <td><img width="65" :src="myinfo.avtr_url" @click="uploadAvtr"></td>-->
          <td>
            <el-upload
                class="avatar-uploader"
                action="https://api.maiquer.tech/api/upload/image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                name="imgFile"
                :headers="token"
                :before-upload="beforeAvatarUpload"
            >
              <img width=65 v-if="imageUrl" :src="imageUrl" class="avatar"/>
            </el-upload>
          </td>

          <td> ›</td>
        </tr>
        <tr>
          <td>背景图</td>
          <td>
            <el-upload
                class="avatar-uploader"
                action="https://api.maiquer.tech/api/upload/image"
                :show-file-list="false"
                :on-success="handleBackSuccess"
                name="imgFile"
                :headers="token"
                :before-upload="beforeAvatarUpload"
            >
              <img width="105" :src="myinfo.backgd_url">
            </el-upload>

          </td>
          <td> ›</td>
        </tr>
        <tr>
          <td>用户名</td>
          <td>
            <span v-if="!clicked" @click="clicked=true">{{ myinfo.name }}</span>
            <el-input v-else v-model="name" @blur="editName"></el-input>
          </td>
          <td> ›</td>
        </tr>
        <tr>
          <td>个性签名</td>
          <td>
            <span v-if="!sclicked" @click="sclicked=true">{{ myinfo.signiture }}</span>
            <el-input v-else v-model="sign" @blur="editSign"></el-input>
          </td>
          <td> ›</td>
        </tr>
        <tr>
          <td>绑定手机号</td>
          <td>{{ myinfo.phone ? myinfo.phone : "未绑定" }}</td>
          <td> ›</td>
        </tr>
        <tr>
          <td>绑定微信</td>
          <td>已绑定</td>
        </tr>
      </table>
    </el-card>
    <el-empty description="这里正在施工哦"></el-empty>
  </div>
</template>

<script lang="ts" setup>
import {userInfo} from "../../store/userInfo";
import {computed, ref} from "vue";
import {ElMessage} from 'element-plus'
import type {UploadProps} from 'element-plus'
import {loginState} from "../../store/loginStatus";

// 初始化 信息等等
const info = userInfo()
const myinfo = computed(() => {
  return info.userInfo
})
const login = loginState();
const token = computed(() => {
  return {Authorization: login.jwtToken}
})
//初始化页面逻辑要用到的信息
const clicked = ref(false)
const sclicked = ref(false)
const name = ref("")
const sign = ref("")
const imageUrl = ref("")
name.value = info.userInfo.name
sign.value = info.userInfo.signiture
imageUrl.value = info.userInfo.avtr_url

// 修改用户基本信息
const editName = async () => {
  await info.editnickName(name.value)
  clicked.value = false
}
const editSign = async () => {
  await info.editSign(sign.value);
  sclicked.value = false
}

//上传文件逻辑
const handleAvatarSuccess: UploadProps['onSuccess'] = async (
    response
) => {
  await info.editAvtr(response.data)
}

const handleBackSuccess: UploadProps['onSuccess'] = async (
    response,
) => {
  await info.editBack(response.data)
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  console.log(rawFile)
  return true
}

</script>

<style scoped lang="scss">
.edit {
  margin: 20px;
  padding: 4px;

  & > {
    width: 100%
  }
}

.avatar-uploader {
  position: relative;
  height: 100%;
}

.info {
  width: 100%;

  & tr {
    height: 50px;
    border: 2px solid black;

    & td:first-child {
      color: gray;
    }

    & td:nth-of-type(2) {
      text-align: end;
    }

    & td:nth-of-type(3) {
      position: relative;
      margin-top: 2px !important;
      text-align: end;
      color: #6b778c;
      font-size: 16px;
    }
  }
}

</style>