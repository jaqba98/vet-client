import type { Meta, StoryObj } from '@storybook/angular';

import { RootPageComponent } from '@vet-client/lib-page';

const meta: Meta<RootPageComponent> = {
  component: RootPageComponent,
  title: 'Page/Root',
};
export default meta;
type Story = StoryObj<RootPageComponent>;

export const Default: Story = {};
