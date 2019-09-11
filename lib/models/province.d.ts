import { BaseInterface } from "./base.interface";
import { IClient } from "./client";
import { ICountry } from "./country";
export interface IProvince extends BaseInterface {
    Client?: IClient;
    Code?: string;
    Name?: string;
    Inactive?: boolean;
    ShortName?: string;
    Country?: ICountry;
}
