import type { Meta, StoryObj } from '@storybook/angular'

import { VetClinicPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<VetClinicPageComponent> = {
  component: VetClinicPageComponent,
  title: 'Page/VetClinic',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetClinicPageComponent>

export const Default: Story = {}
