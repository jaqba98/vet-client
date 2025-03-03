import type { Meta, StoryObj } from '@storybook/angular';

import { VetPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../utils/storybook-utils.service';

const meta: Meta<VetPageComponent> = {
  component: VetPageComponent,
  title: 'Page/Vet',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetPageComponent>;

export const Default: Story = {};
