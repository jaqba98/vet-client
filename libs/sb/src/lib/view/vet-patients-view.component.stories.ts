import type { Meta, StoryObj } from '@storybook/angular'

import { VetPatientsViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<VetPatientsViewComponent> = {
  component: VetPatientsViewComponent,
  title: 'View/VetPatients',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetPatientsViewComponent>

export const Default: Story = {}
