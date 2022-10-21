import { Request, Response } from "express";
import ProductModel from "../database/ProductModel";

export default {
    async getProducts(req: Request, res: Response): Promise<Response> {
        const products = await ProductModel.find()
        return res.json(products)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const product = await ProductModel.findById(id)
        return res.json(product)
    },

    async createProduct(req: Request, res: Response): Promise<Response> {
        const product = await ProductModel.create(req.body)
        return res.json(product)
    },

    async deleteProduct(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const product = await ProductModel.findByIdAndDelete(id)
        return res.json(product)
    }

}

