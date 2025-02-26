import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonControlComponent } from '@vet-client/lib-control';

const meta: Meta<ButtonControlComponent> = {
  component: ButtonControlComponent,
  title: 'Control/Button',
};
export default meta;
type Story = StoryObj<ButtonControlComponent>;

export const Default: Story = {
  args: {
    model: {
      type: 'button',
      text: 'Click me!'
    }
  }
};
