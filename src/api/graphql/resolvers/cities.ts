import { Cities } from '../../../db/models';

export const citiesResolvers = {
  Query: {
    async getAll() {
      return Cities.findAll();
    },
    async getByZipCode(parent: any, args: any, context: any, info: any) {
      console.log(args);
      let test = Cities.findOne({ where: { zipcode: args.zipcode } });
      console.log(test);
      return test;
      //return Cities.findOne({ where: { zipcode: zipcode } });
    },
  },
};
