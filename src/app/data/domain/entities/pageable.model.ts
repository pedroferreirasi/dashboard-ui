import { BodyMeasure } from "./body-measure.model";

export interface PageableModel<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
  last: boolean;
  number: number;
  sort: Sort;
  pageable: Pageable;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
