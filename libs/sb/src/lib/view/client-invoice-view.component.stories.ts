import type { Meta, StoryObj } from '@storybook/angular';

import { ClientInvoiceViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ClientInvoiceViewComponent> = {
  component: ClientInvoiceViewComponent,
  title: 'View/ClientInvoice',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientInvoiceViewComponent>;

export const Default: Story = {};
