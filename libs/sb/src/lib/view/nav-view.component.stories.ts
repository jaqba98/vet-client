import type { Meta, StoryObj } from '@storybook/angular';

import { NavViewComponent } from '@vet-client/lib-view';
import { ButtonValueTypeEnum } from '@vet-client/lib-control';

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
          type: 'button',
          value: { valueType: ButtonValueTypeEnum.text, text: 'Button 1' }
        },
        {
          type: 'button',
          value: { valueType: ButtonValueTypeEnum.text, text: 'Button 2' }
        },
        {
          type: 'button',
          value: { valueType: ButtonValueTypeEnum.text, text: 'Button 3' }
        },
        {
          type: 'button',
          value: { valueType: ButtonValueTypeEnum.text, text: 'Button 4' }
        },
        {
          type: 'button',
          value: { valueType: ButtonValueTypeEnum.text, text: 'Button 5' }
        }
      ]
    }
  }
};
