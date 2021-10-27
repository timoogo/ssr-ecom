import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../index";
import { IProduct } from "../../../components/Product"; 

export interface ISnipcardProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { productId } = req.query ; 
    const product: IProduct  |  undefined = products.find(p => p.id === productId)
    if (!product) {
        res.status(404).json({"error": "Inexisiting product"})
        return ;
    }
    const snipcartProduct : ISnipcardProduct = {... product, image:product?.image.src ?? ""}
    res.status(200).json({snipcartProduct})
}