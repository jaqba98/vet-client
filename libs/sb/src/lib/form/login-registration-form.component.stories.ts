import type { Meta, StoryObj } from '@storybook/angular';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

const meta: Meta<LoginRegistrationFormComponent> = {
  component: LoginRegistrationFormComponent,
  title: 'Form/LoginRegistration'
};
export default meta;
type Story = StoryObj<LoginRegistrationFormComponent>;

export const Default: Story = {};
