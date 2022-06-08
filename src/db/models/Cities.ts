import { DataTypes, Model, ModelStatic, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface CitiesAttributes {
  id: number;
  zipcode: number;
  city: string;
  country: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface CitiesInput
  extends Optional<CitiesAttributes, 'id' | 'zipcode'> {}

export interface CitiesOuput extends Required<CitiesAttributes> {}

class Cities
  extends Model<CitiesAttributes, CitiesInput>
  implements CitiesAttributes
{
  public id!: number;
  public zipcode!: number;
  public city!: string;
  public country!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Cities.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    paranoid: true,
  },
);

export default Cities;
