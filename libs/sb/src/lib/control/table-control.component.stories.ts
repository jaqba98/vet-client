import type { Meta, StoryObj } from '@storybook/angular';

import { TableControlComponent, TableControlModel } from '@vet-client/lib-control';

const meta: Meta<TableControlComponent> = {
  component: TableControlComponent,
  title: 'Control/Table',
};
export default meta;
type Story = StoryObj<TableControlComponent>;

const getRows = (): TableControlModel['rows'] => {
  return Array.from({ length: 100 }, (_, i) => i + 1)
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

export const Default: Story = {
  args: {
    model: {
      addButton: true,
      removeButton: true,
      minIndex: 0,
      currentIndex: 0,
      maxRowPerPage: 5,
      rows: getRows()
    }
  }
};
