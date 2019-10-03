import {BaseInterface} from "./base.interface";

export interface IArticleBase extends BaseInterface{
  Number?: string;
  NumberAlternativ?: string;
  ExternID?: string;
  Name?: string;
  MatchCode?: string;
  LastPurchasePrice?: number;
  CalculationPurchasePrice?: number;
  LastUpdatePurchasePrice?: Date;
  LastPurchaseDateTime?: Date;
}
