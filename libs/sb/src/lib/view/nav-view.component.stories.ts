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
        {
          id: 'button_1',
          type: 'button',
          value: { type: 'text', text: 'Button 1' }
        },
        {
          id: 'button_2',
          type: 'button',
          value: { type: 'text', text: 'Button 2' }
        },
        {
          id: 'button_3',
          type: 'button',
          value: { type: 'text', text: 'Button 3' }
        }
      ]
    }
  }
};
