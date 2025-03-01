import type { Meta, StoryObj } from '@storybook/angular';

import { ClientPageComponent } from '@vet-client/lib-page';

const meta: Meta<ClientPageComponent> = {
  component: ClientPageComponent,
  title: 'Page/Client',
};
export default meta;
type Story = StoryObj<ClientPageComponent>;

export const Default: Story = {};
