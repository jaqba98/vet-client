export interface TableColumnModel {
  value: string;
}

export interface TableRowModel {
  id: number;
  isSelected: boolean;
  columns: TableColumnModel[];
}

export interface TableHeaderModel {
  columns: TableColumnModel[];
}

export interface TableControlModel {
  addButton: boolean;
  removeButton: boolean;
  refreshButton: boolean;
  searchButton: boolean;
  editButton: boolean;
  previewButton: boolean;
  minIndex: number;
  currentIndex: number;
  maxRowPerPage: number;
  rows: TableRowModel[];
}
