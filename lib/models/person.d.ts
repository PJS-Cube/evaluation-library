import { IClient } from './client';
import { IAddress } from './address';
export interface IPerson {
  Oid?: string;
  CreatedOn?: Date;
  ModifiedOn?: Date;
  Client?: IClient;
  FirstName?: string;
  LastName?: string;
  CompanyName?: string;
  Email?: string;
  Notes?: string;
  HomePage?: string;
  DisplayName?: string;
  Address?: IAddress;
}
