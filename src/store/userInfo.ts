import { defineStore } from "pinia";
import getInfo from "../apis/user/getInfo";
import UserInfo from "../entity/userInfo";

export const userInfo = defineStore("userInfo", {
  state: () => {
    return {
      userInfo: {} as UserInfo,
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
