import { BaseInterface } from "./base.interface";
import { IClient } from "./client";
import { ICountry } from "./country";
import { IProvince } from "./province";
export interface IAddress extends BaseInterface {
    Client?: IClient;
    Country?: ICountry;
    Province?: IProvince;
    City?: string;
    ZipCode?: string;
    Street?: string;
    HouseNumber?: string;
    FullAddress?: string;
    Lat?: number;
    Lng?: number;
}
