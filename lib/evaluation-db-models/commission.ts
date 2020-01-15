import {BaseModelMixin} from "./mixins/base.mixin";
import {IEmployee} from "./employee";
import {ICommissionHistoryEntry} from "./commission-history-entry";

export interface ICommission extends BaseModelMixin {
  /*id?: string;
  productId?: string;
  product?: IProductServer;
  employeeId?: string;
  employee?: IEmployeeServer;
  amount?: number;
  commissionGroupId?: string;*/
  id?: string;
  worth?: number;
  percentage?: number;
  amount?: number;
  isManuallySet?: boolean;
  description?: string;
  notes?: string;

  employee?: IEmployee;

  parentId?: string;
  parent?: this;
  children?: this[];

  commissionHistoryEntry?: ICommissionHistoryEntry;
}
