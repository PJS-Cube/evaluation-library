import { IClient } from './client';
import { ICountry } from './country';
import { IProvince } from './province';
import { IUser } from './user';
export interface IAddress {
  Oid?: string;
  CreatedOn?: Date;
  ModifiedOn?: Date;
  CreatedBy?: IUser;
  ModifiedBy?: IUser;
  Client?: IClient;
  Country?: ICountry;
  Province?: IProvince;
  City?: string;
  ZipCode?: string;
  Street?: string;
  HouseNumber?: string;
  FullAddress?: string;
  Lat?: number;
  Lng?: number;
}
