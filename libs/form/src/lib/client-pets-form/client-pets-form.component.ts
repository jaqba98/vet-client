import { Component } from '@angular/core';

import { TableControlComponent, TableControlModel, TableRowModel } from '@vet-client/lib-control';
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

const getModel = (): TableControlModel => {
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
  selector: 'lib-client-pets-form',
  imports: [TableControlComponent],
  templateUrl: './client-pets-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientPetsFormComponent {
  model = getModel();
}
