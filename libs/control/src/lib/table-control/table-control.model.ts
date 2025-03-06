export interface TableColumnModel {
  value: string;
}

export interface TableRowModel {
  columns: TableColumnModel[];
}

export interface TableControlModel {
  minIndex: number;
  currentIndex: number;
  maxRowPerPage: number;
  rows: TableRowModel[];
}
