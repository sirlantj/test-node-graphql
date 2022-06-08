import * as citiesService from '../../../src/db/services/CitiesService';
import {getByZipCode} from '../../../src/db/dal/cities';

const zipCode = 10;

jest.mock('../../../src/db/dal/cities', () => ({
    getByZipCode: jest.fn(),
}));


describe('Cities Service', () => {
    describe('Get by ID', () => {
        it('should accept a payload and call the getByZipCode dal with it', async () => {
            await citiesService.getByZipCode(zipCode);

            expect(getByZipCode).toBeCalledTimes(1);
            expect(getByZipCode).not.toBeNull();
        })
    })
});
