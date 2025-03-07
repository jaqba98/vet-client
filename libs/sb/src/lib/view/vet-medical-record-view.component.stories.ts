import type { Meta, StoryObj } from '@storybook/angular'

import { VetMedicalRecordViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<VetMedicalRecordViewComponent> = {
  component: VetMedicalRecordViewComponent,
  title: 'View/VetMedicalRecord',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetMedicalRecordViewComponent>

export const Default: Story = {}
