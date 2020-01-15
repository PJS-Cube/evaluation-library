import { IBaseDocumentSales } from './base.document.sales';
import { IRepresentative } from './representative';
export interface IOfferDocument {
  Oid?: string;
  OfferStatus?: boolean;
  BaseDocumentSales?: IBaseDocumentSales;
  ChanceForOrder?: boolean;
  ValidUntil?: Date;
  NotReceived?: boolean;
  DeadLine?: Date;
  HandOut?: Date;
  HandOutKind?: number;
  WorkingStatus?: number;
  Promoter?: IRepresentative;
  Seller?: IRepresentative;
}
