import { IArticleBase } from "./article.base";
export interface IArticle {
    Oid?: string;
    BaseArticle?: IArticleBase;
    Note?: string;
    TaresCh?: string;
    TarisEu?: string;
    NotPreferential?: boolean;
    EvaluationCategory?: string;
}
