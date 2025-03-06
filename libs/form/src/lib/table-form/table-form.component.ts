import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableControlComponent, TableControlModel, TableRowModel } from '@vet-client/lib-control';
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component';
import { TableNavModel } from './table-nav-form/table-nav-form.model';

// Temporary only for tests!
const getTableRows = (): TableRowModel[] => {
  return Array.from({ length: 10 }, (_, i) => i + 1)
    .map(index => {
      return {
        id: index,
        isSelected: false,
        columns: [
          { value: `Column_${index}_1` },
          { value: `Column_${index}_2` },
          { value: `Column_${index}_3` },
          { value: `Column_${index}_4` }
        ]
      }
    });
}

@Component({
  selector: 'lib-table-form',
  imports: [CommonModule, TableControlComponent, TableNavFormComponent],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  model: TableControlModel = {
    addButton: true,
    removeButton: true,
    refreshButton: true,
    searchButton: true,
    editButton: true,
    previewButton: true,
    selectButton: true,
    minIndex: 0,
    currentIndex: 0,
    maxRowPerPage: 5,
    headers: [
      { value: '1' },
      { value: '2' },
      { value: '2' },
      { value: '2' },
      { value: '2' },
      { value: '2' },
      { value: '2' },
      { value: '2' }
    ],
    rows: getTableRows(),
  };

  onTableNavEvent(event: TableNavModel) {
    console.log(event);
  }
}
