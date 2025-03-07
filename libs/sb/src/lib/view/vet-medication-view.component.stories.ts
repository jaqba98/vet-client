import type { Meta, StoryObj } from '@storybook/angular'

import { VetMedicationViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<VetMedicationViewComponent> = {
  component: VetMedicationViewComponent,
  title: 'View/VetMedication',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetMedicationViewComponent>

export const Default: Story = {}
