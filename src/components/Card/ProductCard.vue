<template>
  <el-card
    shadow="always"
    class="product"
    @click="opena()"
  >
    <img :src="props.product.backgd_url" />
    <div class="descript">
      <p class="title">{{ props.product.name }}</p>
      <p class="more-info">{{ props.product.name }}</p>
      <p class="price">价格：¥ {{ props.product.price / 100 }}</p>
    </div>
  </el-card>
  <div class="tags">
    <span>{{ 5 }}人测过</span>
    <span>需要{{ 15 }}分钟</span>
    <span>恋爱真难</span>
  </div>
</template>

<script setup lang="ts">
import buyProduct from "../../apis/products/buyProduct";

const props = defineProps<{ product: Product }>();
const opena = async () => {
  console.log(props.product.index);
  await buyProduct(String(props.product.index), 55).then((res) => {
    WeixinJSBridge.invoke(
      "getBrandWCPayRequest",
      {
        appId: res.appId, //公众号ID，由商户传入
        timeStamp: res.timeStamp, //时间戳，自1970年以来的秒数
        nonceStr: "e61463f8efa94090b1f366cccfbbb444", //随机串
        package: `prepay_id=${res.prepayId}`,
        // signType: "MD5", //微信签名方式：
        paySign: res.paySign, //微信签名
      },
      function (res: any) {
        console.log(res);
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          // 使用以上方式判断前端返回,微信团队郑重提示：
          //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        }
      }
    );
  });
};
</script>

<style lang="scss" scoped>
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
  margin: 10px 0px;
  margin-top: 20px;
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
.descript {
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
}
</style>
