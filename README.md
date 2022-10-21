# Games Showcase - GraphQL, MongoDB and Docker

The front-end of this project was bootstrapped with [Vitejs](https://vitejs.dev/).
The back-end has a node api with mongo db and a bff graphql.

## Installing dependencies and running project

If you have installed docker and docker compose in the latest versions, just run `docker compose up` in docker compose folder, or else open each of the folders and run `yarn install` and `yarn dev` or `npm install` and `npm run dev`.

### Ports:

- Node api + mongodb: [http://localhost:3333](http://localhost:3333)
- GraphQL BFF: [http://localhost:4000](http://localhost:4000)
- ReactApp: [http://localhost:5173](http://localhost:5173)

## Project description

This project is a product showcase, where the user can create sections and add products to it. The data from the react application that is manipulated comes from the node api that communicates with mongodb, and its endpoints are accessed by graphql's bff api.

## Project components

The application has 3 routes. In the home component is listed the products and sections, if the user clicks on the product, it will go to the product details route. The user can also choose to create a section, and within the route to create section manage the products he wants in his new section. When components need to manipulate data, they communicate with bff graphql api through gql's.

## Project dependencies

### Node api + mongodb

- typescript
- express
- mongoose

### GraphQL BFF api

- typescript
- apollo-server
- axios
- class-validator
- graphql
- reflect-metadata
- type-graphql

### ReactApp

- typescript
- @apollo/client
- graphql
- react-router-dom
- react-icons
- react-toastify
- styled-components
- vite

<div align="center">
<h3>Docker compose up</h3>
<img width="500" src="readme/gifs/dockercompose.gif" />
<br></br>
<h3>Product details</h3>
<img width="500" src="readme/gifs/productdetails.gif" />
<br></br>
<h3>Create section</h3>
<img width="500" src="readme/gifs/createsection.gif" />
</div>
