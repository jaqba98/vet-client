import type { Meta, StoryObj } from '@storybook/angular';

import { TopNavViewComponent } from '@vet-client/lib-view';

const meta: Meta<TopNavViewComponent> = {
  component: TopNavViewComponent,
  title: 'View/TopNav',
};
export default meta;
type Story = StoryObj<TopNavViewComponent>;

export const Default: Story = {};
