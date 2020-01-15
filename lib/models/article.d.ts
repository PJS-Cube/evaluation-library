import { IArticleBase } from './article.base';
export interface IArticle {
  Oid?: string;
  ArticleBase?: IArticleBase;
  Note?: string;
  TaresCh?: string;
  TarisEu?: string;
  NotPreferential?: boolean;
  EvaluationCategory?: string;
}
