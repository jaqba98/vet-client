import { Component } from '@angular/core';

import {
  SectionControlComponent,
  TableControlComponent,
  TableControlModel,
  TableRowModel
} from '@vet-client/lib-control';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { BaseComponentDirective } from '@vet-client/lib-utils';

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

const getTableModel = (): TableControlModel => {
  return {
    addButton: true,
    removeButton: true,
    minIndex: 0,
    currentIndex: 0,
    maxRowPerPage: 5,
    rows: getTableRows()
  };
};

@Component({
  selector: 'lib-client-pets-view',
  imports: [SectionControlComponent, TableControlComponent],
  templateUrl: './client-pets-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientPetsViewComponent {
  sectionId = RouteSectionEnum.dashboardClientPets;

  tableModel = getTableModel();
}
