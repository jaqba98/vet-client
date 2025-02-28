// done
import type { Meta, StoryObj } from '@storybook/angular';

import { RegistrationViewComponent } from '@vet-client/lib-view';

const meta: Meta<RegistrationViewComponent> = {
  component: RegistrationViewComponent,
  title: 'View/Registration'
};
export default meta;
type Story = StoryObj<RegistrationViewComponent>;

export const Default: Story = {};
