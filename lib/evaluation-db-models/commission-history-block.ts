import {BaseModelMixin} from "./mixins/base.mixin";
import {ICommissionHistoryEntry} from "./commission-history-entry";

export interface ICommissionHistoryBlock extends BaseModelMixin {
  // id of the block
  id?: string;

  // amount of the last block
  initAmount?: number;

  // amount of this block (only inside movement, addition of entries of block)
  amount?: number;

  // amount to pass to next block (initAmount + amount)
  finalAmount?: number;

  previousBlockId?: string;
  previousBlock?: this;

  nextBlockId?: string;
  nextBlock?: this;

  updateOnChanges?: boolean;

  commissionHistoryEntries: ICommissionHistoryEntry[];
}
