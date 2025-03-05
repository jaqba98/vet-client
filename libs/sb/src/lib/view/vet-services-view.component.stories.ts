import type { Meta, StoryObj } from '@storybook/angular';

import { VetServicesViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<VetServicesViewComponent> = {
  component: VetServicesViewComponent,
  title: 'View/VetServices',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetServicesViewComponent>;

export const Default: Story = {};
