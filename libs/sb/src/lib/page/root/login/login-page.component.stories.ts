import type { Meta, StoryObj } from '@storybook/angular';

import { LoginPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../utils/storybook-utils.service';

const meta: Meta<LoginPageComponent> = {
  component: LoginPageComponent,
  title: 'Page/Login',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<LoginPageComponent>;

export const Default: Story = {};
