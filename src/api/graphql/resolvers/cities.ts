import { Cities } from '../../../db/models';

export const citiesResolvers = {
  Query: {
    async getAll() {
      return await Cities.findAll();
    },
    async getByZipCode(parent: any, args: any, context: any, info: any) {
      let result = await Cities.findOne({ where: { zipcode: args.zipcode } });
      console.log(result);
      if (!result) {
        throw new Error('404');
      }
      return result;
    },
  },
};
