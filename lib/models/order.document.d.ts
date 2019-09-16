import { IContact } from "./contact";
export interface IOrderDocumentBase {
    Oid?: string;
    InvoicingInfo?: number;
    FinishedOn?: Date;
    DeliveryStatus?: number;
    InvoiceTo?: IContact;
    InvoiceToAddress?: string;
    SyncToFink?: boolean;
    FinkID?: number;
}
export interface IOrderDocument {
    Oid?: string;
    DeliveryDate?: Date;
    Installation?: boolean;
    AtCall?: boolean;
    AssemblyKind?: number;
    ProjectMainOrderDocument?: boolean;
    BlanketOrder?: boolean;
    BlanketOrderValidUntil?: Date;
    IsConfirmed?: boolean;
    InvoiceClearingStatus?: number;
    Pendent?: boolean;
}
