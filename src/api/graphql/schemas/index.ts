import { gql } from 'apollo-server-express';
import {citiesType} from './cities';

const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;
export const typeDefs = [rootType, citiesType];
