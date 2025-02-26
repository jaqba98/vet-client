import type { Meta, StoryObj } from '@storybook/angular';

import { RegistrationPageComponent } from '@vet-client/lib-page';

const meta: Meta<RegistrationPageComponent> = {
  component: RegistrationPageComponent,
  title: 'Page/Registration',
};
export default meta;
type Story = StoryObj<RegistrationPageComponent>;

export const Default: Story = {};
