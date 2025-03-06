import type { Meta, StoryObj } from '@storybook/angular';

import { ClientMainPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service';

const meta: Meta<ClientMainPageComponent> = {
  component: ClientMainPageComponent,
  title: 'Page/ClientMain',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientMainPageComponent>;

export const Default: Story = {};
