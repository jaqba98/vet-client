import type { Meta, StoryObj } from '@storybook/angular';

import { TableControlComponent } from '@vet-client/lib-control';

const meta: Meta<TableControlComponent> = {
  component: TableControlComponent,
  title: 'Control/Table',
};
export default meta;
type Story = StoryObj<TableControlComponent>;

export const Default: Story = {};
