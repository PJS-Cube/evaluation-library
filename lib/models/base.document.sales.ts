import {IBaseDocument} from "./base.document";
import {IClient} from "./client";


export interface IBaseDocumentSales {
  Oid?: string;
  CashDiscountBase?: number;
  TotalWage?: number;
  TotalOther?: number;
  BaseDocument?: IBaseDocument;
  Client?: IClient;
}
