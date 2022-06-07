import { Router, Request, Response} from 'express';

import * as citiesController from '../controllers/cities';
import * as responseHandler from '../handlers/ResponseHandler';
import {FilterCitiesDTO} from '../dto/cities.dto';
import {Cities} from '../interfaces';

const citiesRouter = Router()

citiesRouter.get('/:zipcode', async (req: Request, res: Response) => {
    const zipcode = Number(req.params.zipcode);

    let city: Cities;

    try {
        city = await await citiesController.getByZipCode(zipcode);
    } catch (err) {
        return responseHandler.serverError(res);
    }
    if (!city) {
        return responseHandler.notFoundError(res, 'City not found');
    }
    responseHandler.success(res, city);

});

citiesRouter.get('/', async (req: Request, res: Response) => {
    const filters:FilterCitiesDTO = req.query

    let listOfCities: Cities[] = [];

    try {
        listOfCities = await citiesController.getAll(filters);
    } catch (err) {
        return responseHandler.serverError(res);
    }

    return   responseHandler.success(res, listOfCities);
});

export default citiesRouter