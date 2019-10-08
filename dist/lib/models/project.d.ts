import { BaseInterface } from "./base.interface";
import { IContact } from "./contact";
import { IDepartment } from "./department";
import { IAddress } from "./address";
import { IBaseDocument } from "./base.document";
import { IUser } from "./user";
import { IClient } from "./client";
export interface IProject extends BaseInterface {
    ProjectID?: string;
    Kind?: IProjectKind;
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
    SignedContractPV?: Date;
    SignedContractH?: Date;
    CanceledOnPV?: Date;
    HasCanceledAfterDeadlinePV?: boolean;
    CanceledOnH?: Date;
    HasCanceledAfterDeadlineH?: boolean;
    DesiredAssemblyYearPhotovoltaic?: number;
    DesiredAssemblyNotePhotovoltaic?: string;
    DesiredAssemblyYearHeating?: number;
    DesiredAssemblyNoteHeating?: string;
}
export interface IProjectKind {
    Oid?: string;
    Name?: string;
    CreatedOn?: Date;
    ModifiedOn?: Date;
    CreatedBy?: IUser;
    ModifiedBy?: IUser;
    Client?: IClient;
}
