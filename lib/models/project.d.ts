import { BaseInterface } from "./base.interface";
import { IContact } from "./contact";
import { IDepartment } from "./department";
import { IAddress } from "./address";
import { IBaseDocument } from "./base.document";
export interface IProject extends BaseInterface {
    ProjectID?: string;
    Name?: string;
    Status?: number;
    Contact?: IContact;
    Department?: IDepartment;
    DateBegin?: Date;
    DateEnd?: Date;
    TelephoneBusiness?: string;
    TelephonePrivate?: string;
    MobilePhone?: string;
    Email?: string;
    FaxBusiness?: string;
    Address?: IAddress;
    Notes?: string;
    HoursCalculated?: number;
    ProcessStatePhotovoltaic?: string;
    ProcessStateHeating?: string;
    Canceled?: boolean;
    Remember?: Date;
    BaseDocument?: IBaseDocument;
    DesiredAssemblyYearPhotovoltaic?: number;
    DesiredAssemblyNotePhotovoltaic?: string;
    DesiredAssemblyYearHeating?: number;
    DesiredAssemblyNoteHeating?: string;
}
