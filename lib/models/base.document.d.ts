import { IContact } from "./contact";
import { IUser } from "./user";
import { IDepartment } from "./department";
import { ISection } from "./section";
import { ITaxType } from "./tax.type";
import { IProject } from "./project";
import { BaseInterface } from "./base.interface";
import { IOrderDocumentBase } from "./order.document";
import { IBaseDocumentSales } from "./base.document.sales";
export declare enum BaseDocumentStatus {
    Open = 0,
    Done = 1,
    Canceled = 2
}
export interface IBaseDocument extends BaseInterface {
    NetAmount?: number;
    VatAmount?: number;
    GrossAmount?: number;
    DiscountBase?: number;
    DiscountBaseGross?: number;
    ArchiveId?: string;
    Subject?: string;
    DocumentDate?: Date;
    DocumentID?: string;
    Clerk?: IUser;
    Status?: BaseDocumentStatus;
    Contact?: IContact;
    StandardOpening?: string;
    BillingAddress?: string;
    DeliveryAddress?: string;
    Department?: IDepartment;
    Section?: ISection;
    TaxType?: ITaxType;
    Currency?: any;
    ConversionRate?: number;
    ShippingType?: any;
    Discount?: number;
    DiscountAmount?: number;
    DiscountAmountGross?: number;
    Project?: IProject;
    HeaderText?: string;
    FooterText?: string;
    Notes?: string;
    IsExported?: boolean;
    IsImported?: boolean;
    IsPrinted?: boolean;
    OrderDocument?: IOrderDocumentBase;
    IsArchived?: boolean;
    IsStatusManual?: boolean;
    BaseDocumentSales?: IBaseDocumentSales;
}
