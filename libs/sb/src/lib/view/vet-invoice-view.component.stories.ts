import type { Meta, StoryObj } from '@storybook/angular';

import { VetInvoiceViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<VetInvoiceViewComponent> = {
  component: VetInvoiceViewComponent,
  title: 'View/VetInvoice',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetInvoiceViewComponent>;

export const Default: Story = {};
