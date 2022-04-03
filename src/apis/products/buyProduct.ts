import axios from "axios";
import qs from "qs";
import { loginState } from "../../store/loginStatus";

const login = loginState();

export default async function buyProduct(id: string, user_id: number) {
  let res: payd = {
    timeStamp: "",
    orderNo: "",
    paySign:
      "=",
    appId: "",
    package: "",
    nonceStr: "",
  };
  await axios({
    url: `https://api.maiquer.tech/api/wx-pay/jsapi/${id}`,
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: login.jwtToken,
    },

    data: qs.stringify({ userId: user_id }),
  }).then((response) => {
    res = response.data.data;
  });
  return res;
}
