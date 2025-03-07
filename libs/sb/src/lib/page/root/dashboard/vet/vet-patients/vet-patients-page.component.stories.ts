import type { Meta, StoryObj } from '@storybook/angular'

import { VetPatientsPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<VetPatientsPageComponent> = {
  component: VetPatientsPageComponent,
  title: 'Page/VetPatients',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetPatientsPageComponent>

export const Default: Story = {}
