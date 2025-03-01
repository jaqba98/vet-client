// done
import type { Meta, StoryObj } from '@storybook/angular';

import { RadioButtonControlComponent } from '@vet-client/lib-control';

const meta: Meta<RadioButtonControlComponent> = {
  component: RadioButtonControlComponent,
  title: 'Control/RadioButton',
};
export default meta;
type Story = StoryObj<RadioButtonControlComponent>;

export const Default: Story = {
  args: {
    model: {
      name: 'role',
      options: [
        { id: 'vet', value: 'Vet' },
        { id: 'client', value: 'Client' }
      ]
    }
  }
};
