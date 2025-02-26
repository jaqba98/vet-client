import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardPageComponent } from '@vet-client/lib-page';

const meta: Meta<DashboardPageComponent> = {
  component: DashboardPageComponent,
  title: 'Page/Dashboard',
};
export default meta;
type Story = StoryObj<DashboardPageComponent>;

export const Default: Story = {};
