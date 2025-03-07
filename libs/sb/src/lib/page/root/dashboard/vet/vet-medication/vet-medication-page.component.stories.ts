import type { Meta, StoryObj } from '@storybook/angular'

import { VetMedicationPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<VetMedicationPageComponent> = {
  component: VetMedicationPageComponent,
  title: 'Page/VetMedication',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetMedicationPageComponent>

export const Default: Story = {}
