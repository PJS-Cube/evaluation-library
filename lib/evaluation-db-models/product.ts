import { BaseModelMixin } from './mixins/base.mixin';

export interface IProduct extends BaseModelMixin {
  id?: string;
  name?: string;
  unit?: string;
  reward?: number;
  description?: string;
}
