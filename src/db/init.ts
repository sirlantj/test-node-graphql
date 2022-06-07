import { Cities } from './models';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';
console.log(process.env.NODE_ENV);
const dbInit = () => Promise.all([Cities.sync({ alter: isDev || isTest })]);

export default dbInit;
