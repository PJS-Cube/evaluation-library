import {IContact} from "./contact";
import {IUser} from "./user";
import {IDepartment} from "./department";
import {ISection} from "./section";
import {ITaxType} from "./tax.type";
import {IProject} from "./project";

export enum BaseDocumentStatus {
  Open = 0,
  Done = 1,
  Canceled = 2,
}

export interface IBaseDocument {
  Oid?: string;
  Contact?: IContact;
  NetAmount?: number;
  VatAmount?:number;
  GrossAmount?:number;
  DiscountBase?:number;
  DiscountBaseGross?:number;
  Subject?: string;
  DocumentDate?: Date;
  DocumentID?: string;
  Clerk?: IUser;
  Status?: BaseDocumentStatus; // 0-> offen, 1-> erledigt, 2-> storniert, 3?-> Auftrag nicht erhalten (needs check)

  Department?: IDepartment;
  Section?: ISection;
  TaxType?: ITaxType;
  Project?: IProject;
}
