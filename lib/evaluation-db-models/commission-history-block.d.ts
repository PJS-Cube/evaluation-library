import { BaseModelMixin } from './mixins/base.mixin';
import { ICommissionHistoryEntry } from './commission-history-entry';
export interface ICommissionHistoryBlock extends BaseModelMixin {
  id?: string;
  initAmount?: number;
  amount?: number;
  finalAmount?: number;
  previousBlockId?: string;
  previousBlock?: this;
  nextBlockId?: string;
  nextBlock?: this;
  updateOnChanges?: boolean;
  commissionHistoryEntries: ICommissionHistoryEntry[];
}
