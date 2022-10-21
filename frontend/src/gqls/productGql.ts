import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query {
      products {
        _id
        name
        price
        image
      }
    }
`;

export const GET_PRODUCT = gql`
  query($productId: String!) {
    productById(productId: $productId) {
      _id
      name
      release
      developer
      publisher
      description
      image
      price
    }
  }
`;