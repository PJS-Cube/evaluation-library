import { BaseInterface } from "./base.interface";
import { IArticle } from "./article";
import { IUnity } from "./unity";
export interface IArticleBase extends BaseInterface {
    Number?: string;
    NumberAlternativ?: string;
    ExternID?: string;
    Name?: string;
    MatchCode?: string;
    LastPurchasePrice?: number;
    CalculationPurchasePrice?: number;
    LastUpdatePurchasePrice?: Date;
    LastPurchaseDateTime?: Date;
    Unity?: IUnity;
    Article?: IArticle;
}
