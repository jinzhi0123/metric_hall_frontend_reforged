import { defineStore } from "pinia";
import login from "../apis/security/login";
import wxauth from "../apis/security/wxauth";
import { smsSend, smsAuth } from "../apis/security/smsAuth";

export const loginState = defineStore("login", {
  state: () => {
    return {
      isLoggedIn: false,
      hasJWTs: false,
      jwtToken: "" as string,
      userid: 0,
    };
  },
  actions: {
    async doLogin(username: string, password: string): Promise<boolean> {
      let success = false;
      await login(username, password).then((session) => {
        if (session.jwt != "") {
          this.isLoggedIn = true;
          success = true;
          this.jwtToken = session.jwt;
          this.userid = session.userid;
          this.save2Local();
        }
      });
      return success;
    },
    async wxLogin(code: string): Promise<boolean> {
      let success = false;
      const state = "maiqu";
      await wxauth(code, state).then((session) => {
        this.isLoggedIn = true;
        this.jwtToken = session.jwt;
        this.userid = session.userid;
        this.save2Local();
        success = true;
      });
      return success;
    },
    async doSendSms(phone: string): Promise<boolean> {
      let res = false;
      await smsSend(phone).then((session) => {
        console.log(session);
        res = true;
      });
      return res;
    },
    async doSmsLogin(phone: string, code: string): Promise<boolean> {
      let success = false;
      await smsAuth(phone, code).then((jwt) => {
        success = true;
        this.jwtToken = jwt;
        const data = jwt.slice(jwt.indexOf(".") + 1, jwt.lastIndexOf("."));
        const id = eval(`(${atob(data)})`);
        this.userid = id.jti;
        this.isLoggedIn = true;
      });
      return success;
    },
    save2Local() {
      localStorage.clear();
      localStorage.setItem("userId", this.userid.toString());
      localStorage.setItem("jwt", this.jwtToken);
    },
    loadfromLocal() {
      if (localStorage.getItem("userId")) {
        this.userid = Number(localStorage.getItem("userId"));
        this.jwtToken = String(localStorage.getItem("jwt"));
        this.isLoggedIn = true;
      }
    },
  },
});
