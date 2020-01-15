import { BaseInterface } from "./base.interface";
export interface ICountry extends BaseInterface {
    Code?: string;
    Name?: string;
    Inactive?: boolean;
    IsoCode?: string;
    IsoName?: string;
    PhoneCode?: string;
    IsMemberOfEU?: boolean;
    SwissCommercialRound?: boolean;
}
