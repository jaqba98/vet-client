import type { Meta, StoryObj } from '@storybook/angular';

import { ClientClinicsViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ClientClinicsViewComponent> = {
  component: ClientClinicsViewComponent,
  title: 'View/ClientClinics',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientClinicsViewComponent>;

export const Default: Story = {};
