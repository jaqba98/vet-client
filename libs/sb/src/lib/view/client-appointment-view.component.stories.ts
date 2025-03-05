import type { Meta, StoryObj } from '@storybook/angular';

import { ClientAppointmentViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ClientAppointmentViewComponent> = {
  component: ClientAppointmentViewComponent,
  title: 'View/ClientAppointment',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientAppointmentViewComponent>;

export const Default: Story = {};
