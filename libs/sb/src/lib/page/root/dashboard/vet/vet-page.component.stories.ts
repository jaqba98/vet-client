import type { Meta, StoryObj } from '@storybook/angular';

import { VetPageComponent } from '@vet-client/lib-page';

const meta: Meta<VetPageComponent> = {
  component: VetPageComponent,
  title: 'Page/Vet',
};
export default meta;
type Story = StoryObj<VetPageComponent>;

export const Default: Story = {};
