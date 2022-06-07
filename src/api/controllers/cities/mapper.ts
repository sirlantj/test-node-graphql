import {Cities} from '../../interfaces'
import {CitiesOuput} from '../../../db/models/Cities'

export const toCities = (city: CitiesOuput): Cities => {
    return {
        id: city.id,
        zipcode: city.zipcode,
        city: city.city,
        country: city.country,
        createdAt: city.createdAt,
        updatedAt: city.updatedAt,
        deletedAt: city.deletedAt,
    }
}