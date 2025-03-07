import type { Meta, StoryObj } from '@storybook/angular'

import { ClientPetsViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<ClientPetsViewComponent> = {
  component: ClientPetsViewComponent,
  title: 'View/ClientPets',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientPetsViewComponent>

export const Default: Story = {}
