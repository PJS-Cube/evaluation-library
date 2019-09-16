import {IBaseDocument} from "./base.document";
import {IClient} from "./client";
import {IUser} from "./user";
import {IRepresentative} from "./representative";


export interface IBaseDocumentSales {
  Oid?: string;
  CashDiscountBase?: number;
  CashDiscountDays?: number;
  CashDiscount?: number;
  CasDiscountDays2?: number;
  CashDiscount2?: number;
  CashDiscountNetDays?: number;
  PurchaseAmount?: number;
  Margin?: number;
  TotalWage?: number;
  TotalOther?: number;
  TotalHours?: number;
  // PaymentTerms?: any; // is ref
  Representative?: IRepresentative; // BelongsTo [THIS].[Representative] -> [Contact].[Oid]
  DeliveryAddressID?: string;
  // Zone?: any; // is ref
  // BillingKind?: any; // is ref
  CostCenterExternal?: string;
  // Category?: any; // is ref
  CalculationKind?: number; // todo create enum
  // DocumentCalculationSettings?: any; // is ref
  DocumentKind?: number;
  IsProtected?: boolean;
  // DocumentClassification?: any; // is ref
  SubDocumentID?: string;
  YourReference?: string;
  YourOrderNumber?: string;
  YourOrderDate?: Date;
  // AutoMobile?: any; // is ref
  //GainPrediction?: any; // is ref
  UGLExportStatus?: number; // todo create enum
  UGLExternID?: string;
  EDIDesiredDeliveryDate?: Date;
  // InvoiceChecker?: any; // is ref
  Bauvorhaben?: string;

  Promoter?: IRepresentative;
  Seller?: IRepresentative;

  IsProtectedBy?: IUser; // BelongsTo [THIS].[IsProtectedBy] -> [User].[Oid]
  BaseDocument?: IBaseDocument; // BelongsTo [THIS].[Oid] -> [BaseDocument].[Oid]
  DeliveryAddress?: any; // BelongsTo [THIS].[DeliveryAddressID] -> [DeliveryAddress].[Oid]
  Client?: IClient;
}
