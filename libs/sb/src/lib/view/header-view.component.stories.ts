import type { Meta, StoryObj } from '@storybook/angular';

import { HeaderViewComponent } from '@vet-client/lib-view';

const meta: Meta<HeaderViewComponent> = {
  component: HeaderViewComponent,
  title: 'View/Header',
};
export default meta;
type Story = StoryObj<HeaderViewComponent>;

export const Default: Story = {};
