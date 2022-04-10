<template>
  <div class="wrapper">
    <el-card shadow="always" class="product" @click="ClickCard()">
      <img :src="props.product.backgd_url" alt=""/>
      <div class="description">
        <p class="title">{{ props.product.name }}</p>
        <p class="more-info">{{ props.product.name }}</p>
        <span class="price" v-if="!props.product.alreadyHave">价格：¥ {{ props.product.price / 100 }}</span>
        <span class="have" v-else>已经购买</span>
      </div>
    </el-card>
    <div class="tags">
      <span>{{ 5 }}人测过</span>
      <span>需要{{ 15 }}分钟</span>
      <span>恋爱真难</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import buyProduct from "../../apis/products/buyProduct";
import {loginState} from "../../store/loginStatus";
import addProduct from "../../apis/products/addProduct";

const login = loginState()

const props = defineProps<{ product: Product }>();
const ClickCard = async () => {
  if (!login.isLoggedIn) {
    window.open("https://api.maiquer.tech/api/wechat/login")
    return
  }
  if (props.product.alreadyHave) {
    window.open(props.product.target_url)
  } else {
    await buyProduct(String(props.product.index), login.userid).then((res) => {
      WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: res.appId, //公众号ID，由商户传入
            timeStamp: res.timeStamp, //时间戳，自1970年以来的秒数
            nonceStr: res.nonceStr, //随机串
            package: res.package, //
            signType: "RSA", //微信签名方式：
            paySign: res.paySign, //微信签名
          },
          async (res: any) => {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              await addProduct(props.product.index).then(
                  res => {
                    if (res) {
                      location.reload()
                    }
                  }
              )
            }
          }
      );
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  transition: all 0.5s ease;
}

.tags {
  & > span {
    font-size: 13px;
    color: grey;
    padding: 5px;
    background-color: #eceeee;
    border-radius: 9px;
    margin-right: 10px;
  }
}

.el-card {
  border-radius: 15px;
  margin: 20px 0 10px;
}

:deep(.el-card__body) {
  padding: 0 !important;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  background: #eceeee;

  & img {
    width: 100px !important;
    height: 100%;
    position: relative;
  }
}

.description {
  margin-left: 20px;

  & > .title {
    font-size: 17px;
    font-weight: bold;
    line-height: 12px;
  }

  & > .more-info {
    font-size: 13px;
    color: grey;
    line-height: 6px;
  }

  & > .price {
    color: red;
    font-size: 12px;
    line-height: 8px;
    background-color: #f6d2d2;
    padding: 6px;
    border-radius: 9px;
  }

  & > .have {
    color: white;
    font-size: 12px;
    line-height: 8px;
    background-color: #7cad44;
    padding: 6px;
    border-radius: 9px;
    text-align: center;
  }
}
</style>
