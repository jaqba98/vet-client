import type { Meta, StoryObj } from '@storybook/angular'

import { VetAppointmentPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<VetAppointmentPageComponent> = {
  component: VetAppointmentPageComponent,
  title: 'Page/VetAppointment',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetAppointmentPageComponent>

export const Default: Story = {}
