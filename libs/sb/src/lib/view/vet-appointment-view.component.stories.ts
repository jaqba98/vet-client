import type { Meta, StoryObj } from '@storybook/angular';

import { VetAppointmentViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<VetAppointmentViewComponent> = {
  component: VetAppointmentViewComponent,
  title: 'View/VetAppointment',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetAppointmentViewComponent>;

export const Default: Story = {};
