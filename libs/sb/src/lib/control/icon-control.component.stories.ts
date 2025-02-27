// done
import type { Meta, StoryObj } from '@storybook/angular';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IconControlComponent } from '@vet-client/lib-control';

const meta: Meta<IconControlComponent> = {
  component: IconControlComponent,
  title: 'Control/Icon',
};
export default meta;
type Story = StoryObj<IconControlComponent>;

export const Default: Story = {
  args: {
    model: {
      icon: faCoffee,
      color: 'icon__dark-primary'
    }
  }
};
