import { IUser } from "./user";
import { IClient } from "./client";
export interface BaseInterface {
    Oid?: string;
    CreatedOn?: Date;
    ModifiedOn?: Date;
    CreatedBy?: IUser;
    ModifiedBy?: IUser;
    Inactive?: boolean;
    Client?: IClient;
}
