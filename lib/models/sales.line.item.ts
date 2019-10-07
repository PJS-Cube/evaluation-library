import {IOrderDocumentBase} from "./order.document";
import {IArticleBase} from "./article.base";

export interface ISalesLineItem {
  Oid?: string;
  ArticleBase?: IArticleBase;
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
  OrderDocumentBase?:  IOrderDocumentBase;

}
