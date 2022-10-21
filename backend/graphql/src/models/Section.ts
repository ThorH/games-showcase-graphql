import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
export class Section {
    @Field()
    _id: string

    @Field()
    nameSection: string

    @Field(_type => [Product])
    products: Product[]
}

@ObjectType()
export class NewSection {
    @Field()
    _id: string

    @Field()
    nameSection: string

    @Field(_type => [String])
    products: string[]
}

@InputType()
export class SectionInput {
    @Field()
    nameSection: string

    @Field(_type => [String])
    products: string[]
}