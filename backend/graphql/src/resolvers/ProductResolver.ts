import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Product, ProductDetails, ProductInput } from "../models/Product";
import axios from 'axios';
import PORT from "../../PORT";

@Resolver()
export default class {
    private productList: Product[] = []

    @Query(() => [Product])
    async products() {
        const { data } = await axios.get(`${PORT}/products`);
        this.productList = data

        return this.productList
    }

    @Query(() => ProductDetails)
    async productById(@Arg('productId') productId: string) {
        const { data } = await axios.get(`${PORT}/product/${productId}`)

        return data
    }

    @Mutation(() => Product)
    async createProduct(@Arg('newProduct') newProduct: ProductInput) {
        const { data } = await axios.post(`${PORT}/product`, newProduct)
        this.productList.push(data)

        return data
    }

    @Mutation(() => Product)
    async deleteProduct(@Arg('productId') productId: string) {
        const { data } = await axios.delete(`${PORT}/product/${productId}`)
        this.productList = this.productList.filter(product => product._id !== data._id)

        return data
    }

}