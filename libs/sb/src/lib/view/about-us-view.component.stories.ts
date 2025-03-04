import type { Meta, StoryObj } from '@storybook/angular';

import { AboutUsViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<AboutUsViewComponent> = {
  component: AboutUsViewComponent,
  title: 'View/AboutUs',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<AboutUsViewComponent>;

export const Default: Story = {};
