import type { Meta, StoryObj } from '@storybook/angular'

import { ClientViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<ClientViewComponent> = {
  component: ClientViewComponent,
  title: 'View/Client',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientViewComponent>

export const Default: Story = {}
