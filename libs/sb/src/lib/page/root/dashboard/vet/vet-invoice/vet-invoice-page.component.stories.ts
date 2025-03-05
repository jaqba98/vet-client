import type { Meta, StoryObj } from '@storybook/angular';

import { VetInvoicePageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service';

const meta: Meta<VetInvoicePageComponent> = {
  component: VetInvoicePageComponent,
  title: 'Page/VetInvoice',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<VetInvoicePageComponent>;

export const Default: Story = {};
