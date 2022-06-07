import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import morgan from 'morgan';
require('dotenv').config();
import cors from 'cors';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import routes from './api/routes';
import { typeDefs } from './api/graphql/schemas';
import { resolvers } from './api/graphql/resolvers';


//import dbInit from './db/init'
//dbInit()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const startExpressApolloServer  = async() => {
  typeDefs;
  resolvers;

    const server = new ApolloServer({ 
      typeDefs, 
      resolvers,
      context: ({ req }) => ({
        ip: req.ip
      }),
      introspection: true,
      csrfPrevention: true,
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });
    await server.start();

    const app: Application = express();

    // Body parsing Middleware
    app.use(cors());
    app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    app.use('/api/v1', routes);
    
    server.applyMiddleware({ app, path: '/api/graphql' });

    try {
      app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
      });
    } catch (error) {
      console.log(`Error occurred: ${error}`);
    }
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
    return { server, app };
 }

 startExpressApolloServer();
 