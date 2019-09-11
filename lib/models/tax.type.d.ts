import { BaseInterface } from "./base.interface";
import { IClient } from "./client";
import { ICountry } from "./country";
export interface ITaxType extends BaseInterface {
    Code?: string;
    Name?: string;
    Client?: IClient;
    TaxCalculation?: number;
    InvoiceText?: string;
    Intrastat?: boolean;
    Country?: ICountry;
    OverrideVatType?: boolean;
    InternalServiceCharge?: boolean;
    InternalAddition?: number;
}
