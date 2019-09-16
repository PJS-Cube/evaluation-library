import {IContact} from "./contact";
import {IUser} from "./user";
import {IDepartment} from "./department";
import {ISection} from "./section";
import {ITaxType} from "./tax.type";
import {IProject} from "./project";
import {BaseInterface} from "./base.interface";
import {IOrderDocumentBase} from "./order.document";

export enum BaseDocumentStatus {
  Open = 0,
  Done = 1,
  Canceled = 2,
}

export interface IBaseDocument extends BaseInterface {

  NetAmount?: number;
  VatAmount?:number;
  GrossAmount?:number;
  DiscountBase?:number;
  DiscountBaseGross?:number;
  ArchiveId?: string;
  Subject?: string;
  DocumentDate?: Date;
  DocumentID?: string;
  Clerk?: IUser;
  Status?: BaseDocumentStatus; // 0-> offen, 1-> erledigt, 2-> storniert, 3?-> Auftrag nicht erhalten (needs check)
  Contact?: IContact;
  StandardOpening?: string;
  BillingAddress?: string;
  DeliveryAddress?: string;
  // BusinessKind?: any; // is ref
  // CostCenter?: any; // is ref
  Department?: IDepartment;
  Section?: ISection;
  TaxType?: ITaxType;
  // PaymentMethod?: any; // is ref
  Currency?: any; // is ref
  ConversionRate?: number;
  ShippingType?: any; // is ref
  Discount?: number;
  DiscountAmount?: number;
  DiscountAmountGross?: number;
  Project?: IProject;
  HeaderText?: string;
  FooterText?: string;
  Notes?: string;
  IsExported?: boolean;
  IsImported?: boolean;
  // Language?: any; // is ref
  // StockMaster?: any; // is ref
  IsPrinted?: boolean;
  OrderDocument?: IOrderDocumentBase;
  IsArchived?: boolean;
  IsStatusManual?: boolean;

}
