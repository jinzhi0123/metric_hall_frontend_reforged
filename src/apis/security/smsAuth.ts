import axios from "axios";

export async function smsSend(phone: string): Promise<boolean> {
  let res = false;
  await axios
    .post(`https://api.maiquer.tech/api/sms/smsCodeSend?phone=${phone}`)
    .then((response) => {
      console.log(response.data);
      res = true;
    });
  return res;
}
export async function smsAuth(phone: string, code: string): Promise<string> {
  let res = "";
  await axios
    .post(`https://api.maiquer.tech/api/sms/login?phone=${phone}&code=${code}`)
    .then((response) => {
      if (response.data.code == 0) res = response.data.data.jwt;
    });
  return res;
}
