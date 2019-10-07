import {BaseInterface} from "./base.interface";
import {IContact} from "./contact";
import {IDepartment} from "./department";
import {IAddress} from "./address";
import {IBaseDocument} from "./base.document";

export interface IProject extends BaseInterface {
  ProjectID?: string;
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

  BaseDocument?: IBaseDocument;

  DesiredAssemblyYearPhotovoltaic?: number;
  DesiredAssemblyNotePhotovoltaic?: string;
  DesiredAssemblyYearHeating?: number;
  DesiredAssemblyNoteHeating?: string;
}
