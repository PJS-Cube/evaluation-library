import { BaseInterface } from "./base.interface";
import { IClient } from "./client";
import { IAddress } from "./address";
export interface IDepartment extends BaseInterface {
    Client?: IClient;
    Code?: string;
    Name?: string;
    Inactive?: boolean;
    Phone?: string;
    Email?: string;
    Fax?: string;
    HomePage?: string;
    Address?: IAddress;
    Notes?: string;
}
