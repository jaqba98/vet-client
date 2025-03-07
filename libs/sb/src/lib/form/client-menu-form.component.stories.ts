import type { Meta, StoryObj } from '@storybook/angular'

import { ClientMenuFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<ClientMenuFormComponent> = {
  component: ClientMenuFormComponent,
  title: 'Form/ClientMenu',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientMenuFormComponent>

export const Default: Story = {}
