import type { Meta, StoryObj } from '@storybook/angular'

import { ClientInvoicePageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<ClientInvoicePageComponent> = {
  component: ClientInvoicePageComponent,
  title: 'Page/ClientInvoice',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientInvoicePageComponent>

export const Default: Story = {}
