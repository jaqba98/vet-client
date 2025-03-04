import type { Meta, StoryObj } from '@storybook/angular';

import { VetMenuFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<VetMenuFormComponent> = {
  component: VetMenuFormComponent,
  title: 'Form/VetMenu',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetMenuFormComponent>;

export const Default: Story = {};
