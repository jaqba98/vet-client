import type { Meta, StoryObj } from '@storybook/angular';

import { VetSettingsPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service';

const meta: Meta<VetSettingsPageComponent> = {
  component: VetSettingsPageComponent,
  title: 'Page/VetSettings',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetSettingsPageComponent>;

export const Default: Story = {};
