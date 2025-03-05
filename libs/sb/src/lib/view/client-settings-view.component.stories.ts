import type { Meta, StoryObj } from '@storybook/angular';

import { ClientSettingsViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ClientSettingsViewComponent> = {
  component: ClientSettingsViewComponent,
  title: 'View/ClientSettings',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientSettingsViewComponent>;

export const Default: Story = {};
