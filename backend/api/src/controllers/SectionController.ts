import { Request, Response } from "express";
import SectionModel from '../database/SectionModel'

export default {
    async getSections(req: Request, res: Response): Promise<Response> {
        const section = await SectionModel.aggregate([{ $lookup: { from: "products", localField: "products", foreignField: "_id", as: "products" } }])
        return res.json(section)
    },

    async createSection(req: Request, res: Response): Promise<Response> {
        const section = await SectionModel.create(req.body)
        return res.json(section)
    },

    async updateSection(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { products } = req.body
        const section = await SectionModel.findByIdAndUpdate(id, { products: products })
        return res.json(section)
    },

    async deleteSection(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const section = await SectionModel.findByIdAndDelete(id)
        return res.json(section)
    }
}
