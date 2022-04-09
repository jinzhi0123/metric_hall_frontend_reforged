import {defineStore} from "pinia";
import getAllProducts from "../apis/products/queryAllProducts";
import getUserProduct from "../apis/user/getUserProduct";
import Product from "../entity/product";
import {loginState} from "./loginStatus";


export const ProductStore = defineStore("pd", {
    state: () => {
        return {
            productLs: [] as Product[],
        };
    },
    actions: {
        async getAll() {
            const login = loginState();
            const Fall = getAllProducts();
            const Fusr = getUserProduct(login.userid,login.jwtToken);
            // next we will mark those
            await Promise.all([Fall, Fusr]).then((result) => {
                let all = result[0];
                const usr = result[1];
                for (const i of usr) {
                    const index = all.findIndex((a) => a.index == i.index);
                    all[index].alreadyHave = true;
                }
                // store products
                this.productLs = all;
            });
        },
    },
});
