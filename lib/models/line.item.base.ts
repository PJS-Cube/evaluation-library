import {IUser} from "./user";
import {IClient} from "./client";
import {IBaseDocument} from "./base.document";

export interface ILineItemBase {
  Oid?: string;
  CreatedOn?: Date;
  ModifiedOn?: Date;
  CreatedBy?: IUser;
  ModifiedBy?: IUser;
  Client?: IClient;
  ObjectType?: number;
  Text?: string;
  LongText?: string;
  Document?: IBaseDocument;
}
