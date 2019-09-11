import {IContact} from "./contact";

export enum BaseDocumentStatus {
  Open = 0,
  Done = 1,
  Canceled = 2,
}

export interface IBaseDocument {
  Oid?: string;
  Contact?: IContact;
  Status?: BaseDocumentStatus; // 0-> offen, 1-> erledigt, 2-> storniert, 3?-> Auftrag nicht erhalten (needs check)
  DocumentID?: string;
}
