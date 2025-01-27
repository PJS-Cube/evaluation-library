import {BaseInterface} from "./base.interface";
import {IContact} from "./contact";
import {IDepartment} from "./department";
import {IAddress} from "./address";
import {IBaseDocument} from "./base.document";
import {IUser} from "./user";
import {IClient} from "./client";

export interface IProject extends BaseInterface {
  ProjectID?: string;
  Kind?: IProjectKind;
  Name?: string;
  // todo create enum for Status
  Status?: number;
  // ProjectKind?: IProjectKind;
  Contact?: IContact;
  Department?: IDepartment;
  DateBegin?: Date;
  DateEnd?: Date;
  // Photo?: binary;
  TelephoneBusiness?: string;
  TelephonePrivate?: string;
  MobilePhone?: string;
  Email?: string;
  FaxBusiness?: string;
  Address?: IAddress;
  Notes?: string;
  HoursCalculated?: number;

  // VenDoc custom
  ProcessStatePhotovoltaic?: string; // key PV_ProcessState
  ProcessStateHeating?: string; // key H_ProcessState

  Canceled?: boolean;
  Remember?: Date;

  // BaseDocument?: IBaseDocument;
  BaseDocuments?: IBaseDocument[];

  SignedContractPV?: Date;
  SignedContractH?: Date;
  CanceledOnPV?: Date; // Storniert am
  HasCanceledAfterDeadlinePV?: boolean; // ob ausserhalb der Stornofrist
  CanceledOnH?: Date; // Storniert am
  HasCanceledAfterDeadlineH?: boolean; // ob ausserhalb der Stornofrist

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
