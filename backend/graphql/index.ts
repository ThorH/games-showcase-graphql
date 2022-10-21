import "reflect-metadata";
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import ProductResolver from "./src/resolvers/ProductResolver";
import SectionResolver from './src/resolvers/SectionResolver'

async function main() {
    const schema = await buildSchema({
        resolvers: [
            ProductResolver,
            SectionResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`Server runnnin on ${url}`);
}

main();