import axios from "axios";
import Product from "../../entity/product";

export default async function getAllProducts(
    type?: number
): Promise<Product[]> {
    const res = [] as Product[];
    await axios
        .get(
            type
                ? `https://api.maiquer.tech/api/evaluation/queryAll/${type}`
                : "https://api.maiquer.tech/api/evaluation/queryAll"
        )
        .then((response) => {
            for (const i of response.data.data) {
                const p = new Product(
                    i.name,
                    i.id,
                    i.coverPic,
                    i.realUrl,
                    i.price * 100,
                    i.type
                );
                res.push(p);
            }
        }) //
        .catch((err) => {
            console.log(err);
        });
    return res;
}
