import { gql } from "@apollo/client";

export const GET_SECTIONS = gql`
  query {
    sections {
        _id
        nameSection
        products {
            _id
            name
            image
            price
        }
    }
  }
`;


export const CREATE_SECTION = gql`
  mutation($newSection: SectionInput!) {
    createSection(newSection: $newSection) {
      _id
      nameSection
      products
    }
  }
`;

export const DELETE_SECTION = gql`
  mutation($deleteSectionId: String!) {
    deleteSection(id: $deleteSectionId) {
      _id
      nameSection
    }
  }
`;