import type { Meta, StoryObj } from '@storybook/angular';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  ButtonControlComponent,
  ButtonValueTypeEnum,
} from '@vet-client/lib-control';

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
      value: {
        valueType: ButtonValueTypeEnum.text,
        text: 'Click me'
      }
    }
  }
};

export const Icon: Story = {
  args: {
    model: {
      type: 'button',
      value: {
        valueType: ButtonValueTypeEnum.icon,
        model: {
          icon: faBars
        }
      }
    }
  }
};
