import { kebabCase } from 'lodash';

import * as citiesDal from '../dal/cities';
import { GetAllCitiesFilters } from '../dal/types';
import { CitiesOuput } from '../models/Cities';

export const getByZipCode = (zipcode: number): Promise<CitiesOuput> => {
  return citiesDal.getByZipCode(zipcode);
};

export const getAll = (
  filters: GetAllCitiesFilters,
): Promise<CitiesOuput[]> => {
  return citiesDal.getAll(filters);
};
