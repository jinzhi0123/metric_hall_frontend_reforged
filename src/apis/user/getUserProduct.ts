import axios from "axios";
import Product from "../../entity/product";

export default async function getInfo(userid: number): Promise<Product[]> {
  let res = [] as Product[];
  await axios
    .get(`https://api.maiquer.tech/api/user/queryById/${userid}`)
    .then((response) => {
      const all = response.data.data.myEvaluations;
      if (all.length != 0) {
        for (const i of all) {
          const a = new Product(i.name, i.id, i.coverPic, i.realUrl, i.price);
          res.push(a);
        }
      }
    });
  return res;
}
