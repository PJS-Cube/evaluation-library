import { BaseModelMixin } from "./mixins/base.mixin";
import { IEmployee } from "./employee";
import { ICommission } from "./commission";
import { ICommissionHistoryBlock } from "./commission-history-block";
export declare enum CommissionHistoryEntryType {
    Commission = "commission",
    Correction = "correction",
    Payout = "payout"
}
export interface ICommissionHistoryEntry extends BaseModelMixin {
    id?: string;
    entryType?: CommissionHistoryEntryType;
    entryIdReference?: string;
    description?: string;
    revisions?: ICommissionHistoryEntry[];
    amount?: number;
    validationDate?: Date;
    employee?: IEmployee;
    employeeId?: string;
    commissionHistoryBlock?: ICommissionHistoryBlock;
    commissionHistoryBlockId?: string;
    notes?: string;
    additionalData?: {
        address?: string;
        customerName?: string;
    };
    commissions?: ICommission[];
}
