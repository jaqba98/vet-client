import type { Meta, StoryObj } from '@storybook/angular'

import { VetClinicFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<VetClinicFormComponent> = {
  component: VetClinicFormComponent,
  title: 'Form/VetClinic',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetClinicFormComponent>

export const Default: Story = {}
