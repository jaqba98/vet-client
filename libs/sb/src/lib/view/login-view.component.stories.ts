// done
import type { Meta, StoryObj } from '@storybook/angular';

import { LoginViewComponent } from '@vet-client/lib-view';

const meta: Meta<LoginViewComponent> = {
  component: LoginViewComponent,
  title: 'View/Login',
};
export default meta;
type Story = StoryObj<LoginViewComponent>;

export const Default: Story = {};
