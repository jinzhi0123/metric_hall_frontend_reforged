import axios from "axios";

export default async function wxauth(
  code: string,
  state: string
): Promise<{ jwt: string; userid: number }> {
  let jwt = "";
  let userid = 0;
  await axios
    .get(`https://api.maiquer.tech/callback?code=${code}&state=${state}`)
    .then((response) => {
      if (response.data.code == 0) {
        jwt = response.data.data.jwt;
        userid = response.data.data.userId;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return { jwt: jwt, userid: userid };
}
