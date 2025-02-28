// done
import type { Meta, StoryObj } from '@storybook/angular';

import { PriceControlComponent } from '@vet-client/lib-control';

const meta: Meta<PriceControlComponent> = {
  component: PriceControlComponent,
  title: 'Control/Price',
};
export default meta;
type Story = StoryObj<PriceControlComponent>;

export const Default: Story = {
  args: {
    title: 'Standard',
    price: '$ 9.99',
    description: 'Essential features for pet owners and veterinarians.',
    elements: [
      'Appointment Scheduling',
      'Basic Pet Records',
      'Email Notifications',
      'Veterinarian Directory'
    ]
  }
};
