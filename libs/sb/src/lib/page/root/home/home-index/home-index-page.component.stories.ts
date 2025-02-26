import type { Meta, StoryObj } from '@storybook/angular';

import { HomeIndexPageComponent } from '@vet-client/lib-page';

const meta: Meta<HomeIndexPageComponent> = {
  component: HomeIndexPageComponent,
  title: 'Page/Home/HomeIndex',
};
export default meta;
type Story = StoryObj<HomeIndexPageComponent>;

export const Default: Story = {};
