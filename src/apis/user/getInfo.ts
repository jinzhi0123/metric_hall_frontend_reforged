import axios from "axios";
import UserInfo from "../../entity/userInfo";

export default async function getInfo(userid: number, jwt: string): Promise<UserInfo> {
    let result = new UserInfo("未登录", 0, "", "", "", "","");
    await axios({
        url: `https://api.maiquer.tech/api/user/queryById/${userid}`, method: "GET", headers: {
            Authorization: jwt
        }
    })
        .then((response) => {
            result = new UserInfo(
                response.data.data.username,
                response.data.data.id,
                response.data.data.backImg,
                response.data.data.avatar,
                response.data.data.email,
                response.data.data.phone,
                response.data.data.signature
            );
        });
    return result;
}
