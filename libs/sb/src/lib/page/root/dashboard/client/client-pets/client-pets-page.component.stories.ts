import type { Meta, StoryObj } from '@storybook/angular'

import { ClientPetsPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<ClientPetsPageComponent> = {
  component: ClientPetsPageComponent,
  title: 'Page/ClientPets',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientPetsPageComponent>

export const Default: Story = {}
