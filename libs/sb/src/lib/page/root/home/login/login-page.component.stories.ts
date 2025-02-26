import type { Meta, StoryObj } from '@storybook/angular';

import { LoginPageComponent } from '@vet-client/lib-page';

const meta: Meta<LoginPageComponent> = {
  component: LoginPageComponent,
  title: 'Page/Home/Login',
};
export default meta;
type Story = StoryObj<LoginPageComponent>;

export const Default: Story = {};
