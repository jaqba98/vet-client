// done
import type { Meta, StoryObj } from '@storybook/angular';

import { ContactViewComponent } from '@vet-client/lib-view';

const meta: Meta<ContactViewComponent> = {
  component: ContactViewComponent,
  title: 'View/Contact',
};
export default meta;
type Story = StoryObj<ContactViewComponent>;

export const Default: Story = {};
