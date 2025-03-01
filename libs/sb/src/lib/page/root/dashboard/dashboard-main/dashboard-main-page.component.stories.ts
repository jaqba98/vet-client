import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardMainPageComponent } from '@vet-client/lib-page';

const meta: Meta<DashboardMainPageComponent> = {
  component: DashboardMainPageComponent,
  title: 'Page/DashboardMain',
};
export default meta;
type Story = StoryObj<DashboardMainPageComponent>;

export const Default: Story = {};
