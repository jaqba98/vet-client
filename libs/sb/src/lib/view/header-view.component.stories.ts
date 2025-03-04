import type { Meta, StoryObj } from '@storybook/angular';

import { HeaderViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<HeaderViewComponent> = {
  component: HeaderViewComponent,
  title: 'View/Header',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<HeaderViewComponent>;

export const Default: Story = {};
