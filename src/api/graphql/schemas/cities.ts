import { gql } from 'apollo-server-express';

export const citiesType = gql`
  type Cities {
    id: ID!
    zipcode: Int!
    city: String!
    country: String!
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  extend type Query {
    getAll: [Cities!]
    getByZipCode(zipcode: Int!): Cities
  }
`;
