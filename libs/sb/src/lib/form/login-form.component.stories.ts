// done
import type { Meta, StoryObj } from '@storybook/angular';

import { LoginFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<LoginFormComponent> = {
  component: LoginFormComponent,
  title: 'Form/Login',
  ...StorybookUtilsService.getFormConfiguration()
};
export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Default: Story = {};
