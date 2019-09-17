import {IBaseDocumentSales} from "./base.document.sales";
import {IRepresentative} from "./representative";

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
  Promoter?: IRepresentative;
  Seller?: IRepresentative;
  // RefusalReason?: any; // is ref
  // SiteManager?: any; // is ref
  // OeNorm?: any; // is ref
}
