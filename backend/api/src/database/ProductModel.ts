import { Schema } from "mongoose";
import mongoose from "mongoose";

const ProductModel = new Schema({
    name: String,
    release: String,
    developer: String,
    publisher: String,
    description: String,
    image: String,
    price: Number
}, { timestamps: true })

export default mongoose.model('Product', ProductModel)