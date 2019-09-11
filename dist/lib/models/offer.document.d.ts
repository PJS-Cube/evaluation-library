import { IBaseDocumentSales } from "./base.document.sales";
export interface IOfferDocument {
    Oid?: string;
    OfferStatus?: boolean;
    BaseDocumentSales?: IBaseDocumentSales;
}
