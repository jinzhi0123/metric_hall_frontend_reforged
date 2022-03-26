import { defineStore } from "pinia";
import getAllProducts from "../apis/products/queryAllProducts";
import Product from "../entity/product";

export const ProductStore = defineStore("pd", {
  state: () => {
    return {
      productLs: [] as Product[],
    };
  },
  actions: {
    async getAll(type?: number) {
      await getAllProducts(type).then((res) => {
        this.productLs = res;
      });
    },
  },
});
