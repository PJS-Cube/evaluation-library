import {IBaseDocumentSales} from "./base.document.sales";

export interface IOfferDocument {
  Oid?: string;
  OfferStatus?: boolean;
  BaseDocumentSales?: IBaseDocumentSales;
  ChanceForOrder?: boolean;
  ValidUntil?: Date;
  NotReceived?: boolean;
  DeadLine?: Date;
  HandOut?: Date;
  HandOutKind?: number; // todo create enum
  WorkingStatus?: number; // todo create Enum
  // RefusalReason?: any; // is ref
  // SiteManager?: any; // is ref
  // OeNorm?: any; // is ref
}
