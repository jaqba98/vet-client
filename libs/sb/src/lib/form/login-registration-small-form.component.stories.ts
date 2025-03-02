// done
import type { Meta, StoryObj } from '@storybook/angular';

import { SmallLoginRegistrationFormComponent } from '@vet-client/lib-form';

const meta: Meta<SmallLoginRegistrationFormComponent> = {
  component: SmallLoginRegistrationFormComponent,
  title: 'Form/LoginRegistrationSmall'
};
export default meta;
type Story = StoryObj<SmallLoginRegistrationFormComponent>;

export const Default: Story = {};
