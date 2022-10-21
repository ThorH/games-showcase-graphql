import { ProductInterface } from "./product"

export interface SectionInterface {
    _id: string
    nameSection: string
    products: ProductInterface[]
}

export interface CreateSectionInterface {
    nameSection: string
    products: string[]
}