import { IActiveMixin } from "./active.mixin";
import { TimestampsMixin } from "./timestamps.mixin";

export type BaseModelMixin = IActiveMixin & TimestampsMixin;
