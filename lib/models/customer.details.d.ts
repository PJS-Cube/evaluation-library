import { IContact } from "./contact";
import { IRepresentative } from "./representative";
export interface ICustomerDetails {
    Oid?: string;
    Contact?: IContact;
    CustomerID?: string;
    FinancialID?: string;
    RepresentativeRef?: string;
    Representative?: IRepresentative;
    Representatives?: IRepresentative[];
}
