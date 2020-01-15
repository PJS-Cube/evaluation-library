import { IContactKind } from './contact.kind';
import { IPerson } from './person';
import { ICustomerDetails } from './customer.details';
import { IRepresentativeDetails } from './representative.details';
import { IIndustry } from './industry';
import { IRepresentative } from './representative';
export interface IContact {
  Oid?: string;
  Person?: IPerson;
  CustomerDetails?: ICustomerDetails;
  RepresentativeDetails?: IRepresentativeDetails;
  ContactKinds?: IContactKind[];
  Industries?: IIndustry[];
  Representatives?: IRepresentative[];
  Promoter?: IRepresentative;
  Seller?: IRepresentative;
}
