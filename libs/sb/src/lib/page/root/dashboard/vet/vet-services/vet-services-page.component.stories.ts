import type { Meta, StoryObj } from '@storybook/angular'

import { VetServicesPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<VetServicesPageComponent> = {
  component: VetServicesPageComponent,
  title: 'Page/VetServices',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetServicesPageComponent>

export const Default: Story = {}
