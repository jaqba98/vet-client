import type { Meta, StoryObj } from '@storybook/angular';

import { VetServicesFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<VetServicesFormComponent> = {
  component: VetServicesFormComponent,
  title: 'Form/VetServices',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetServicesFormComponent>;

export const Default: Story = {};
