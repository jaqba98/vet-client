import type { Meta, StoryObj } from '@storybook/angular';

import { SmallLogoControlComponent } from '@vet-client/lib-control';

const meta: Meta<SmallLogoControlComponent> = {
  component: SmallLogoControlComponent,
  title: 'Control/SmallLogo',
};
export default meta;
type Story = StoryObj<SmallLogoControlComponent>;

export const Default: Story = {};
