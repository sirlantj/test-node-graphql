import * as service from '../../../db/services/CitiesService';
import { FilterCitiesDTO } from '../../dto/cities.dto';
import { Cities } from '../../interfaces';
import * as mapper from './mapper';

export const getByZipCode = async (zipcode: number): Promise<Cities> => {
  return mapper.toCities(await service.getByZipCode(zipcode));
};

export const getAll = async (filters: FilterCitiesDTO): Promise<Cities[]> => {
  return (await service.getAll(filters)).map(mapper.toCities);
};
