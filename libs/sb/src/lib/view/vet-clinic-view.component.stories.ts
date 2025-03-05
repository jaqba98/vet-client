import type { Meta, StoryObj } from '@storybook/angular';

import { VetClinicViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<VetClinicViewComponent> = {
  component: VetClinicViewComponent,
  title: 'View/VetClinic',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetClinicViewComponent>;

export const Default: Story = {};
