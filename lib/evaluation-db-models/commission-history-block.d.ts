import { BaseModelMixin } from './mixins/base.mixin';
import { ICommissionHistoryEntry } from './commission-history-entry';
export interface ICommissionHistoryBlock extends BaseModelMixin {
    id?: string;
    initAmount?: number;
    amount?: number;
    finalAmount?: number;
    previousBlock?: ICommissionHistoryBlock;
    nextBlock?: ICommissionHistoryBlock;
    updateOnChanges?: boolean;
    commissionHistoryEntries: ICommissionHistoryEntry[];
}
