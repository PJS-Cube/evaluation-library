import { BaseModelMixin } from "./mixins/base.mixin";
export interface IEmployee extends BaseModelMixin {
    id?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
}
