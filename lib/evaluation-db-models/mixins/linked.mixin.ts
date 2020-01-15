export type LinkedMixin<T = any> = {
  // link to next item
  nextItem?: T;
  // link to previous item
  previousItem?: T;
};
