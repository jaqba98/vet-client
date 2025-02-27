import type { Meta, StoryObj } from '@storybook/angular';

import { PriceControlComponent } from '@vet-client/lib-control';

const meta: Meta<PriceControlComponent> = {
  component: PriceControlComponent,
  title: 'Control/Price',
};
export default meta;
type Story = StoryObj<PriceControlComponent>;

export const Default: Story = {};
