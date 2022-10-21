import { Schema } from "mongoose";
import mongoose from "mongoose";

const SectionModel = new Schema({
    nameSection: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Section' }]
}, { timestamps: true })

export default mongoose.model('Section', SectionModel)