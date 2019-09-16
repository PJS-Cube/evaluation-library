import {IContact} from "./contact";
import {ICustomerDetails} from "./customer.details";
import {IRepresentativeDetails} from "./representative.details";
import {IBaseDocumentSales} from "./base.document.sales";
import {IClient} from "./client";
import {IUser} from "./user";

export interface IRepresentative {
  Oid?: string;
  Contact?: IContact;
  CustomerDetails?: ICustomerDetails;
  RepresentativeDetails?: IRepresentativeDetails;

  BaseDocumentSales?: IBaseDocumentSales; // HasMany [THIS].[BaseDocumentSales] -> [BaseDocumentSales].[Oid]


  isSeller?: boolean;
  isPromoter?: boolean;

  CreatedOn?: Date;
  ModifiedOn?: Date;
  CreatedBy?: IUser;
  ModifiedBy?: IUser;
  Client?: IClient;
}
