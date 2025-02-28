// done
import type { Meta, StoryObj } from '@storybook/angular';

import { ToastControlComponent } from '@vet-client/lib-control';

const meta: Meta<ToastControlComponent> = {
  component: ToastControlComponent,
  title: 'Control/Toast',
};
export default meta;
type Story = StoryObj<ToastControlComponent>;

export const Default: Story = {};
