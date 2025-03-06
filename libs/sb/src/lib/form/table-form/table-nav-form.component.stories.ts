import type { Meta, StoryObj } from '@storybook/angular';

import { TableNavFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../../utils/storybook-utils.service';

const meta: Meta<TableNavFormComponent> = {
  component: TableNavFormComponent,
  title: 'Form/TableNav',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<TableNavFormComponent>;

export const Default: Story = {};
