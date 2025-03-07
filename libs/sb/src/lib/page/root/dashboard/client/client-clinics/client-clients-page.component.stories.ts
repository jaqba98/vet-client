import type { Meta, StoryObj } from '@storybook/angular'

import { ClientClinicsPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<ClientClinicsPageComponent> = {
  component: ClientClinicsPageComponent,
  title: 'Page/ClientClinics',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientClinicsPageComponent>

export const Default: Story = {}
