import { BaseInterface } from "./base.interface";
import { IClient } from "./client";
export interface ISection extends BaseInterface {
    Code?: string;
    Name?: string;
    Client?: IClient;
}
