import type { Meta, StoryObj } from '@storybook/angular';

import { RegistrationViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<RegistrationViewComponent> = {
  component: RegistrationViewComponent,
  title: 'View/Registration',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<RegistrationViewComponent>;

export const Default: Story = {};
