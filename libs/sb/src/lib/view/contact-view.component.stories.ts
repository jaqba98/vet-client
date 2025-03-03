import type { Meta, StoryObj } from '@storybook/angular';

import { ContactViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ContactViewComponent> = {
  component: ContactViewComponent,
  title: 'View/Contact',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ContactViewComponent>;

export const Default: Story = {};
