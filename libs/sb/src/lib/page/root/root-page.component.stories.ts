import type { Meta, StoryObj } from '@storybook/angular';

import { RootPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../utils/storybook-utils.service';

const meta: Meta<RootPageComponent> = {
  component: RootPageComponent,
  title: 'Page/Root',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<RootPageComponent>;

export const Default: Story = {};
