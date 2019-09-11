import { IContact } from "./contact";
export declare enum BaseDocumentStatus {
    Open = 0,
    Done = 1,
    Canceled = 2
}
export interface IBaseDocument {
    Oid?: string;
    Contact?: IContact;
    Status?: BaseDocumentStatus;
    DocumentID?: string;
}
