import type { Meta, StoryObj } from '@storybook/angular';

import { VetMainPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service';

const meta: Meta<VetMainPageComponent> = {
  component: VetMainPageComponent,
  title: 'Page/VetMain',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetMainPageComponent>;

export const Default: Story = {};
