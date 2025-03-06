import type { Meta, StoryObj } from '@storybook/angular';

import { ClientPetsFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ClientPetsFormComponent> = {
  component: ClientPetsFormComponent,
  title: 'Form/ClientPets',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientPetsFormComponent>;

export const Default: Story = {};
