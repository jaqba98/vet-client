import type { Meta, StoryObj } from '@storybook/angular';

import { ClientPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../utils/storybook-utils.service';

const meta: Meta<ClientPageComponent> = {
  component: ClientPageComponent,
  title: 'Page/Client',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientPageComponent>;

export const Default: Story = {};
