import type { Meta, StoryObj } from '@storybook/angular';

import { PriceViewComponent } from '@vet-client/lib-view';

const meta: Meta<PriceViewComponent> = {
  component: PriceViewComponent,
  title: 'View/Price',
};
export default meta;
type Story = StoryObj<PriceViewComponent>;

export const Default: Story = {};
