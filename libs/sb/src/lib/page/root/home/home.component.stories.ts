import type { Meta, StoryObj } from '@storybook/angular';

import { HomePageComponent } from '@vet-client/lib-page';

const meta: Meta<HomePageComponent> = {
  component: HomePageComponent,
  title: 'Page/Home',
};
export default meta;
type Story = StoryObj<HomePageComponent>;

export const Default: Story = {};
