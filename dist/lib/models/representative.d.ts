import { IContact } from "./contact";
import { ICustomerDetails } from "./customer.details";
import { IRepresentativeDetails } from "./representative.details";
export interface IRepresentative {
    Oid?: string;
    Contact?: IContact;
    CustomerDetails?: ICustomerDetails;
    RepresentativeDetails?: IRepresentativeDetails;
    isSeller?: boolean;
    isPromoter?: boolean;
}
