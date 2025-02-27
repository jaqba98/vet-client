import type { Meta, StoryObj } from '@storybook/angular';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  ButtonControlComponent,
  ButtonControlTypeEnum,
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
      id: 'click',
      value: {
        type: ButtonControlTypeEnum.text,
        text: 'Click me',
      }
    }
  }
};

export const Icon: Story = {
  args: {
    model: {
      id: 'click',
      value: {
        type: ButtonControlTypeEnum.icon,
        icon: { icon: faBars },
      }
    }
  }
};

export const Link: Story = {
  args: {
    model: {
      id: 'click',
      value: {
        type: ButtonControlTypeEnum.link,
        text: 'Click me',
        tip: 'Hello',
      }
    }
  }
};
