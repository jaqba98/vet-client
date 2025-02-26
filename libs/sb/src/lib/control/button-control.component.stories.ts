import type { Meta, StoryObj } from '@storybook/angular';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ButtonControlComponent } from '@vet-client/lib-control';

const meta: Meta<ButtonControlComponent> = {
  component: ButtonControlComponent,
  title: 'Control/Button'
};
export default meta;
type Story = StoryObj<ButtonControlComponent>;

export const Default: Story = {
  args: {
    model: {
      id: 'click',
      type: 'button',
      value: {
        type: 'text',
        text: 'Click me',
      }
    }
  }
};

export const Icon: Story = {
  args: {
    model: {
      id: 'click',
      type: 'button',
      value: {
        type: 'icon',
        icon: {
          icon: faBars
        }
      }
    }
  }
};
