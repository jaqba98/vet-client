export interface TableColumnModel {
  value: string;
}

export interface TableRowModel {
  id: number;
  isSelected: boolean;
  columns: TableColumnModel[];
}

export interface TableControlModel {
  addButton: boolean;
  removeButton: boolean;
  minIndex: number;
  currentIndex: number;
  maxRowPerPage: number;
  rows: TableRowModel[];
}
