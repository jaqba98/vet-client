import type { Meta, StoryObj } from '@storybook/angular';

import { NavViewComponent } from '@vet-client/lib-view';

const meta: Meta<NavViewComponent> = {
  component: NavViewComponent,
  title: 'View/Nav',
};
export default meta;
type Story = StoryObj<NavViewComponent>;

export const Default: Story = {
  args: {
    model: {
      options: [
        { type: 'button', text: 'Button 1' },
        { type: 'button', text: 'Button 2' },
        { type: 'button', text: 'Button 3' },
        { type: 'button', text: 'Button 4' },
        { type: 'button', text: 'Button 5' },
      ]
    }
  }
};
