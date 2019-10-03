import {IArticle} from "./article";

export interface ISalesLineItem {
  Oid?: string;
  Article?: IArticle;
  Unity?: any; //IUnity;
  Quantity?: number;
  QuantityDelivery?: number;
  DateDelivery?: Date;
  UnitPrice?: number;
  UnitPriceGross?: number;
  Total?: number;
  TotalGross?: number;
  Weight?: number;

  OrderLineItem?: any; // IOrderLineItem
  OrderDocument?: any; // IOrderDocumentBase;

}
