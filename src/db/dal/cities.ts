import {Op} from 'sequelize'
import {Cities} from '../models'
import {GetAllCitiesFilters} from './types'
import {CitiesOuput} from '../models/Cities'

export const getAll = async (filters?: GetAllCitiesFilters): Promise<CitiesOuput[]> => {
    return Cities.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const getByZipCode = async (zipcode: number): Promise<CitiesOuput> => {
    const cities = await Cities.findOne({ where: { zipcode: zipcode } }); 

    if (!cities) {
        // @todo throw custom error
        throw new Error('not found')
    }

    return cities
}