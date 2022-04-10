import {defineStore} from "pinia";
import getInfo from "../apis/user/getInfo";
import UserInfo from "../entity/userInfo";
import {editAvatar, editSignature, editUsername} from "../apis/user/editInfo";
import {loginState} from "./loginStatus";

export const userInfo = defineStore("userInfo", {
    state: () => {
        return {
            userInfo: {
                name: "请登录",
                userid: 0,
                backgd_url: "https://tg-1252147446.cos.ap-shanghai.myqcloud.com/2019/10/Surface-Pro7.jpg",
                avtr_url: "https://pic4.zhimg.com/50/v2-6afa72220d29f045c15217aa6b275808_hd.jpg",
                email: "请登录",
                phone: "00000",
                signiture: ""
            } as UserInfo,
        };
    },
    actions: {
        async fetchInfo(userid: number, jwt: string): Promise<boolean> {
            let success = false;
            await getInfo(userid, jwt).then((data) => {
                this.userInfo = data;
                success = true;
            });
            return success;
        },
        async editnickName(username: string): Promise<void> {
            const login = loginState()
            await editUsername(username, login.userid, login.jwtToken)
            await this.fetchInfo(login.userid, login.jwtToken)
        },
        async editSign(sign: string): Promise<void> {
            const login = loginState()
            await editSignature(sign, login.userid, login.jwtToken)
            await this.fetchInfo(login.userid, login.jwtToken)
        },
        async editAvtr(url: string): Promise<void> {
            const login = loginState()
            await editAvatar(url, login.userid, login.jwtToken)
            await this.fetchInfo(login.userid, login.jwtToken)
        }
    },
});
