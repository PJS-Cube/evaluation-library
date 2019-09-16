import { IClient } from "./client";
export interface IPerson {
    Oid?: string;
    CreatedOn?: Date;
    ModifiedOn?: Date;
    Client?: IClient;
    FirstName?: string;
    LastName?: string;
    CompanyName?: string;
    Email?: string;
    Notes?: string;
    HomePage?: string;
    DisplayName?: string;
}
