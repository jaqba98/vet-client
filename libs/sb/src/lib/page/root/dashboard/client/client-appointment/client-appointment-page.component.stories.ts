import type { Meta, StoryObj } from '@storybook/angular';

import { ClientAppointmentPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service';

const meta: Meta<ClientAppointmentPageComponent> = {
  component: ClientAppointmentPageComponent,
  title: 'Page/ClientAppointment',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientAppointmentPageComponent>;

export const Default: Story = {};
