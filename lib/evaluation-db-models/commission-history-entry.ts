import {BaseModelMixin} from "./mixins/base.mixin";
import {IEmployee} from "./employee";
import {ICommission} from "./commission";
import {ICommissionHistoryBlock} from "./commission-history-block";

export enum CommissionHistoryEntryType {
  Commission = "commission",
  Correction = "correction",
  Payout = "payout"
}


export interface ICommissionHistoryEntry extends BaseModelMixin {
  id?: string;
  entryType?: CommissionHistoryEntryType; // type of the entry
  entryIdReference?: string; // reference to commission or other (based on type)
  description?: string;
  revisions?: ICommissionHistoryEntry[]; // json backups of entry
  amount?: number; // unit to payout (can also be negative)
  validationDate?: Date; // date which will be used to set the chronological order
  employee?: IEmployee;
  employeeId?: string; // uid of the linked employee
  commissionHistoryBlock?: ICommissionHistoryBlock;
  commissionHistoryBlockId?: string; // belonging to the history block

  notes?: string;
  additionalData?: {
    address?: string;
    customerName?: string;
  };

  commissions?: ICommission[];
}
