import {IContact} from "./contact";
import {ISalesLineItem} from "./sales.line.item";

export interface IOrderDocumentBase {
  Oid?: string;
  InvoicingInfo?: number; // todo create enum
  // OrderCost?: any; // is ref
  FinishedOn?: Date;
  DeliveryStatus?: number; // todo create enum
  InvoiceTo?:IContact;
  InvoiceToAddress?: string;
  // OrderDocumentStatus?: any; // is ref
  SyncToFink?: boolean;
  FinkID?: number;
  SalesLineItems?: ISalesLineItem[];
}

export interface IOrderDocument {
  Oid?: string;
  DeliveryDate?: Date;
  Installation?: boolean;
  AtCall?: boolean;
  AssemblyKind?: number; // todo create enum
  // OrderAgreement?: any; // is ref
  ProjectMainOrderDocument?: boolean;
  BlanketOrder?: boolean;
  BlanketOrderValidUntil?: Date;
  IsConfirmed?: boolean;
  // SiteManager?: any; // is ref
  InvoiceClearingStatus?: number; // todo create enum
  Pendent?: boolean;
  // OeNorm?: any; // is ref
}
