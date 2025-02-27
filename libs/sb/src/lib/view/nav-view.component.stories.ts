import type { Meta, StoryObj } from '@storybook/angular';

import { NavViewComponent } from '@vet-client/lib-view';

const meta: Meta<NavViewComponent> = {
  component: NavViewComponent,
  title: 'View/Nav',
};
export default meta;
type Story = StoryObj<NavViewComponent>;

export const Default: Story = {};
