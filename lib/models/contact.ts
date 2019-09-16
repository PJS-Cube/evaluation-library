import {IContactKind} from "./contact.kind";
import {IPerson} from "./person";
import {ICustomerDetails} from "./customer.details";
import {IRepresentativeDetails} from "./representative.details";
import {IIndustry} from "./industry";
import {IRepresentative} from "./representative";
import {BaseInterface} from "./base.interface";

export interface IContact extends BaseInterface {
  Oid?: string;
  Person?: IPerson;

  CustomerDetails?: ICustomerDetails;
  RepresentativeDetails?: IRepresentativeDetails;

  ContactKinds?: IContactKind[];
  Industries?: IIndustry[];

  Promoter?: IRepresentative;
  Seller?: IRepresentative;
}
