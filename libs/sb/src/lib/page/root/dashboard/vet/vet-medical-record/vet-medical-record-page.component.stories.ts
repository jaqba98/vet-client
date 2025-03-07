import type { Meta, StoryObj } from '@storybook/angular'

import { VetMedicalRecordPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<VetMedicalRecordPageComponent> = {
  component: VetMedicalRecordPageComponent,
  title: 'Page/VetMedicalRecord',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetMedicalRecordPageComponent>

export const Default: Story = {}
