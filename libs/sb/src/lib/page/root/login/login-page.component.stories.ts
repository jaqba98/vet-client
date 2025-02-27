import type { Meta, StoryObj } from '@storybook/angular';

import { LoginPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../utils/storybook-utils.service';

const meta: Meta<LoginPageComponent> = {
  component: LoginPageComponent,
  title: 'Page/Home/Login',
  ...StorybookUtilsService.getPageConfiguration()
};
export default meta;
type Story = StoryObj<LoginPageComponent>;

export const Default: Story = {};
