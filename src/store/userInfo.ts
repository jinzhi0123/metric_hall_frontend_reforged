import {defineStore} from "pinia";
import getInfo from "../apis/user/getInfo";
import UserInfo from "../entity/userInfo";

export const userInfo = defineStore("userInfo", {
    state: () => {
        return {
            userInfo: {
                name: "请登录",
                userid: 0,
                backgd_url: "https://tg-1252147446.cos.ap-shanghai.myqcloud.com/2019/10/Surface-Pro7.jpg",
                avtr_url: "https://pic4.zhimg.com/50/v2-6afa72220d29f045c15217aa6b275808_hd.jpg",
                email: "请登录",
                phone: "00000"
            } as UserInfo,
        };
    },
    actions: {
        async fetchInfo(userid: number): Promise<boolean> {
            let success = false;
            await getInfo(userid).then((data) => {
                this.userInfo = data;
                success = true;
            });
            console.log(this.userInfo);
            return success;
        },
    },
});
