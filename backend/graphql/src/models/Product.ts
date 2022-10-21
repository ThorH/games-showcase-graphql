import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
    @Field()
    _id: string

    @Field()
    name: string

    @Field()
    image: string

    @Field()
    price: number
}

@ObjectType()
export class ProductDetails {
    @Field()
    _id: string

    @Field()
    name: string

    @Field()
    release: string

    @Field()
    developer: string

    @Field()
    publisher: string

    @Field()
    description: string

    @Field()
    image: string

    @Field()
    price: number
}

@InputType()
export class ProductInput {
    @Field()
    name: string

    @Field()
    release: string

    @Field()
    developer: string

    @Field()
    publisher: string

    @Field()
    description: string

    @Field()
    image: string

    @Field()
    price: number
}